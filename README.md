# Ethereal Folio: A Modern Portfolio

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Jasu-25/portfolio)

Ethereal Folio is a visually stunning, minimalist portfolio website designed for Jaswant Karri. The application features a clean, modern aesthetic with a focus on typography, white space, and subtle micro-interactions. It consists of four main pages: a comprehensive Home page that serves as a dashboard, a detailed Projects page, an informative About page with a timeline, and a functional Contact page. The design incorporates a 'glass morphism' effect for the navigation bar, ensuring a sleek look across all devices. The entire application is built to be fully responsive, providing an exceptional user experience on desktop, tablet, and mobile.

## Key Features

- **Modern & Minimalist Design**: Clean, uncluttered UI with a focus on content and readability.
- **Four Unique Pages**: A comprehensive Home page, a detailed Projects gallery, an About page with a timeline, and a dedicated Contact page.
- **Glass Morphism Navbar**: A sleek, semi-transparent navigation bar that stays fixed on scroll.
- **Fully Responsive**: Flawless user experience across desktops, tablets, and mobile devices.
- **Interactive Timeline**: A visually engaging vertical timeline for education and work experience on the About page.
- **Functional Contact Form**: A working contact form with validation, connected to a mock Cloudflare Worker endpoint.
- **Built for Performance**: Optimized for fast load times and smooth animations.

## Technology Stack

- **Frontend**: React, Vite, React Router
- **Styling**: Tailwind CSS, shadcn/ui
- **Animation**: Framer Motion
- **Form Management**: React Hook Form, Zod
- **Notifications**: Sonner
- **Backend**: Hono on Cloudflare Workers
- **Deployment**: Cloudflare Pages

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ethereal-folio.git
    cd ethereal-folio
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Run the development server:**
    ```bash
    bun dev
    ```

The application will be available at `http://localhost:3000`.

## Development Scripts

- `bun dev`: Starts the Vite development server with live reloading.
- `bun build`: Compiles and bundles the application for production.
- `bun lint`: Runs ESLint to check for code quality and style issues.
- `bun deploy`: Builds the project and deploys it to Cloudflare Pages.

## Deployment

This project is optimized for deployment on Cloudflare Pages.

### One-Click Deploy

You can deploy this project to your own Cloudflare account with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Jasu-25/portfolio)

### Manual Deployment with Wrangler

1.  **Login to Cloudflare:**
    ```bash
    bunx wrangler login
    ```

2.  **Build the project:**
    ```bash
    bun build
    ```

3.  **Deploy the application:**
    ```bash
    bun deploy
    ```

Wrangler will guide you through the process of creating a new project and deploying your application.

## Project Structure

- `src/`: Contains all the frontend React application code.
  - `components/`: Shared and reusable React components.
  - `pages/`: Page-level components corresponding to application routes.
  - `lib/`: Utility functions and libraries.
  - `hooks/`: Custom React hooks.
- `worker/`: Contains the Cloudflare Worker backend code written with Hono.
- `public/`: Static assets that are served directly.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.