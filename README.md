# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Online Library System

A React + Redux single‑page application (SPA) for browsing and managing an online library.

## Features

- **Home** with category links and popular books
- **Book List** page with category filtering, dynamic routing, search by title/author, and per‑book links
- **Book Details** page displaying author, description, and rating, with navigation back to Browse
- **Add Book** page with validated form; new books are stored in Redux and immediately visible in Browse
- **404** page for undefined routes, with link back to Home

## Tech Stack

| Tool | Purpose |
| --- | --- |
| Vite | Fast dev server & bundler |
| React 18 | UI library |
| React Router DOM v6 | Client‑side routing |
| Redux Toolkit | State management |
| TailwindCSS | Utility‑first styling |



## Folder Structure

```
├── src
│   ├── Utils/          # dummy data seed
│   ├── Components/     # page components (routes)
│   ├── Utils/          # Redux store & slice
│   ├── App.jsx         # central router + navbar
│   └── main.jsx        # entry point
└── README.md
```


# Clone the repository
git clone https://github.com/Akhileshyadu00/Online-Library.git

# Navigate into the project folder
cd online-library-system

# Install dependencies
npm install

# Start development server
npm run dev

Open `http://localhost:5173` to view the app.

## Deployment

Deploy to Netlify, Vercel, or GitHub Pages by running `npm run build` and following the host’s instructions.
