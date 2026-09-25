# Swapnil Pawar - Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website showcasing software development projects, technical skills, work experience, and educational background. Built with **Next.js 15**, **React 18**, **Tailwind CSS**, and **Firebase**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Library & Language:** [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI Components:** [Radix UI Primitives](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **AI Integration:** [Genkit AI](https://firebase.google.com/docs/genkit) (`@genkit-ai/googleai` with Gemini 2.5 Flash)
- **Backend & Cloud:** [Firebase](https://firebase.google.com/) (Analytics & App Hosting)
- **Form Handling & Messaging:** [Web3Forms API](https://web3forms.com/)

---

## ✨ Features

- **Animated Splash Screen:** Custom entrance animation with brand logo.
- **Dynamic Hero Section:** Interactive SVG starfield particles with welcome toast notification.
- **Projects Showcase:** Interactive project cards with tech tags, responsive mobile toggle, and direct repository / live demo links.
- **Tech Stack & Skills:** Categorized skill badges with hover scale transitions.
- **Experience & Education:** Chronological cards detailing internship experiences and academic journey.
- **Contact Form:** Working message submission powered by Web3Forms with instant status toasts.
- **Responsive Navigation:** Sticky glassmorphic navbar with mobile slide-out sheet drawer and direct CV download button.

---

## 🛠️ Getting Started (Run Locally)

Follow these steps to set up and run the project locally on your machine:

### 1. Prerequisites

Make sure you have Node.js and npm installed on your system:
- **Node.js**: `v18.18.0` or `v20.x`+ recommended
- **npm**: `v9.x` or `v10.x`+

Check your versions:
```bash
node -v
npm -v
```

---

### 2. Navigate to the Project Directory

Open your terminal (PowerShell, Command Prompt, or Bash) and navigate to the `portfolio-site` directory:

```bash
cd d:/Project/Portfolio/portfolio-site
```
*(or your relevant project path)*

---

### 3. Install Dependencies

Install the required npm packages:

```bash
npm install
```

> **Note:** If you encounter any peer dependency conflicts with React 18 / Next 15 packages, run:
> ```bash
> npm install --legacy-peer-deps
> ```

---

### 4. (Optional) Configure Environment Variables

If you plan to use Google Gemini AI / Genkit features, create a `.env.local` file in the `portfolio-site` root directory:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

---

### 5. Start the Local Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

The dev server will start on port **9002** by default.

Open your web browser and visit:
👉 **[http://localhost:9002](http://localhost:9002)**

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the development server at [http://localhost:9002](http://localhost:9002) with Turbopack. |
| `npm run build` | Builds the production-ready application in the `.next` folder. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs Next.js ESLint to analyze code quality. |
| `npm run typecheck` | Runs the TypeScript compiler to verify type correctness without emitting files. |
| `npm run genkit:dev` | Starts the Genkit AI developer environment and flows. |
| `npm run genkit:watch` | Starts Genkit in watch mode for automatic reloading. |

---

## 📂 Project Structure

```text
portfolio-site/
├── docs/                      # Project blueprint and design guidelines
├── public/                    # Static assets
├── src/
│   ├── ai/                    # Genkit AI configuration & dev flows
│   ├── app/                   # Next.js App Router (Layouts, Pages, Styles)
│   │   ├── blog/              # Blog routes
│   │   ├── globals.css        # Global CSS variables & keyframes
│   │   ├── layout.tsx         # Root layout with Splash Screen & Toaster
│   │   └── page.tsx           # Portfolio landing page
│   ├── components/
│   │   ├── layout/            # Header, Footer, Splash Screen
│   │   ├── sections/          # Hero, Projects, Experience, Skills, Education, Contact
│   │   └── ui/                # Radix UI primitives & custom components (Stars, Buttons, etc.)
│   ├── hooks/                 # Custom React hooks (use-toast, use-mobile)
│   └── lib/                   # Static data (projects, skills), Firebase config, utils & types
├── next.config.ts             # Next.js configuration & image remote patterns
├── tailwind.config.ts         # Tailwind CSS theme, colors, and typography configuration
└── package.json               # Project dependencies and run scripts
```

---

## 👤 Author

**Swapnil Pawar**
- **GitHub:** [@Swapnilp011](https://github.com/Swapnilp011)
- **LinkedIn:** [Swapnil Pawar](https://www.linkedin.com/in/swapnilp011/)
- **Email:** [swapnildpawar011@gmail.com](mailto:swapnildpawar011@gmail.com)
