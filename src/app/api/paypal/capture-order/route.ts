import { NextResponse } from "next/server";

import { getPaypalAccessToken, getPaypalApiBase } from "@/lib/paypal";

type CaptureOrderRequest = {
  orderId: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CaptureOrderRequest;

    if (!body.orderId) {
      return NextResponse.json(
        { error: "Missing orderId." },
        { status: 400 },
      );
    }

    const accessToken = await getPaypalAccessToken();
    const baseUrl = getPaypalApiBase();

    const response = await fetch(
      `${baseUrl}/v2/checkout/orders/${body.orderId}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to capture PayPal order.", details: data },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      details: data,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
