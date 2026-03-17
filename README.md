# INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE 2026 Website

This repository contains the source code for the official website of the INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE 2026. The application is built using modern web technologies to provide a fast, responsive, and informative experience for visitors and potential delegates.

## About the Project

The website serves as the primary online platform for the conference. It provides essential information about the event, its objectives, program schedule, and key initiatives. The goal is to unite African youth for a just, inclusive, and sustainable Africa.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices, from mobile phones to desktop computers.
- **Event Countdown**: A dynamic countdown timer displays the time remaining until the conference.
- **Informational Sections**: Detailed sections including:
    - **About**: An overview of the conference's mission and vision.
    - **Pillars**: The core themes and focus areas of the event.
    - **Program**: The schedule of speakers and sessions.
    - **Impact**: Information on the expected impact of the conference.
- **Image Gallery**: A dedicated gallery page to showcase moments from past events and related activities.
- **AUSP Youth Solutions Challenge**: A section detailing a flagship competition for youth-led solutions.
- **Component-Based Architecture**: Built with reusable React components for maintainability and scalability.

## Tech Stack

This project is built with a modern technology stack:

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Linting/Formatting**: ESLint and Prettier are set up for code consistency.

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── public/
│   ├── GALLERY/       # Images for the gallery page
│   └── LOGO/          # Application logo
├── src/
│   ├── app/           # Application routes
│   │   ├── gallery/   # Gallery page route
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/
│   │   ├── sections/  # Components for different home page sections
│   │   ├── ui/        # UI components from shadcn/ui
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── lib/
│   │   └── utils.ts   # Utility functions
└── tailwind.config.ts # Tailwind CSS configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and a package manager (like npm, yarn, or pnpm) installed on your system.
- Node.js (v18.x or later recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repository
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To create a production-ready build of the application, run:

```sh
npm run build
```
This will create an optimized build in the `.next` directory.

## Deployment

This Next.js application can be deployed to any hosting provider that supports Node.js or serverless functions, including Vercel (the creators of Next.js) and Firebase Hosting.
