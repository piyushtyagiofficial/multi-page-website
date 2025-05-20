![Landing_Image](https://drive.google.com/uc?export=view&id=1pUatbXA8XvAJJ171fC_AtDVnk4_KyhEt)

# Elite8 Digital | Creative Agency

A modern, multi-page website for Elite8 Digital, a creative agency. Built with React, Vite, and Tailwind CSS.

## Features
- Multi-page layout: Home, About, Work, Contact, Project Details
- Custom components: Navbar, Footer, ParallaxSection, PreLoader, CustomCursor, ScrollReveal
- Smooth animations and parallax effects
- Responsive design
- Google Fonts integration (Sora)
- Asset management for images and icons

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd multi-page-website
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` by default.

### Building for Production
```sh
npm run build
# or
yarn build
```
The production-ready files will be in the `dist` folder.

### Preview Production Build
```sh
npm run preview
# or
yarn preview
```

## Project Structure
```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable React components
│   ├── data/            # Data files (e.g., projects.js)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (Home, About, Work, etc.)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS config
├── postcss.config.js    # PostCSS config
├── vite.config.js       # Vite config
└── package.json         # Project metadata and scripts
```

## License
This project is for demonstration and educational purposes.
