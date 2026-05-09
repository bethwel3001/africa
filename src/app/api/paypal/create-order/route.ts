import { NextResponse } from "next/server";

import {
  getPaypalAccessToken,
  getPaypalApiBase,
  TICKET_PRICES,
  type TicketType,
} from "@/lib/paypal";

type CreateOrderRequest = {
  ticketType: TicketType;
  currency?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateOrderRequest;
    const ticketType = body.ticketType;
    const currency = body.currency || "USD";

    if (!ticketType || !(ticketType in TICKET_PRICES)) {
      return NextResponse.json(
        { error: "Invalid ticket type." },
        { status: 400 },
      );
    }

    const accessToken = await getPaypalAccessToken();
    const amount = TICKET_PRICES[ticketType];
    const baseUrl = getPaypalApiBase();
    const origin = request.headers.get("origin");
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || origin || "http://localhost:3000";

    const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: amount,
            },
            description: `IPAYC 2026 ${ticketType} ticket`,
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              return_url: `${appUrl}/payment?paypal=success&ticket=${ticketType}`,
              cancel_url: `${appUrl}/payment?paypal=cancelled&ticket=${ticketType}`,
              user_action: "PAY_NOW",
            },
          },
        },
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as {
      id?: string;
      links?: Array<{ rel: string; href: string }>;
      message?: string;
    };

    if (!response.ok || !data.id) {
      return NextResponse.json(
        { error: data.message || "Failed to create PayPal order." },
        { status: 500 },
      );
    }

    const approveUrl = data.links?.find((link) => link.rel === "approve")?.href;

    return NextResponse.json({
      orderId: data.id,
      approveUrl,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
