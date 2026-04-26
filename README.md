# Kenavid Monogram — Premium Embroidery Atelier

Premium monogram embroidery production and machine operation training academy based in Lagos, Nigeria. Founded by Victor Atoyebi.

This repository contains the front-end application for the Kenavid Monogram website, built as a blazing-fast Single Page Application (SPA).

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [TanStack Router](https://tanstack.com/router) (Type-safe routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** React Hook Form + Zod

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/kenavid-monogram.git
   cd kenavid-monogram
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🛠️ Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the app for production (outputs to `dist/`).
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Runs ESLint to check for code issues.
- `npm run format` - Formats code using Prettier.

## 📂 Project Structure

```text
src/
├── assets/           # Static images, posters, and icons
├── components/       # Reusable React components (UI, site-specific)
├── lib/              # Utility functions, WhatsApp configs, and helpers
├── routes/           # TanStack file-based routing components
│   ├── __root.tsx    # Root layout and global SEO metadata
│   ├── index.tsx     # Home page
│   ├── services.tsx  # Services & Production page
│   ├── training.tsx  # Academy & Training page
│   ├── gallery.tsx   # Curated works gallery
│   └── contact.tsx   # Contact and location
├── main.tsx          # Application entry point
└── styles.css        # Global CSS and Tailwind directives
```

## 🌍 Deployment

This project is fully optimized for deployment on **Vercel** as a Client-Side Routed SPA.

The repository includes a `vercel.json` configuration file at the root. This ensures that Vercel routes all requests (like `/services` or `/training`) back to `index.html` so that TanStack Router can handle the client-side navigation without triggering 404 Not Found errors on page refresh.

To deploy:

1. Push your code to GitHub.
2. Import the project in your Vercel dashboard.
3. The default Vite build settings (`npm run build`, `dist` directory) will work automatically.
