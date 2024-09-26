# Astro Spark Template

Astro Spark is a modern starter template optimized for static sites, built using Astro.

Demo available at https://www.spark.rubenwinant.be/en

## Features

- Astro for blazing-fast static site generation.
- Alpine.js: Lightweight JS for simple interactivity without overhead.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- MDX Support: Write components directly within Markdown.
- Sitemap Generator: Automatically generates a sitemap for SEO.
- SEO Optimized: Meta tags, Open Graph, and structured data support.
- Responsive Design: Out-of-the-box mobile responsiveness.
- 

## Installation

First, clone the repository and navigate to the project folder:

```
git clone https://github.com/Ruben-Winant/astro_spark_template
cd astro_spark_template
```

Next, install the necessary dependencies:

```
npm install
```

## Usage

To start the development server, run:

```
npm run dev
```

This will launch a local development server accessible at `http://localhost:3000`, allowing you to see changes in real-time.

To build the project for production:

```
npm run build
```

This will create an optimized static site in the `dist/` folder.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build locally.
- `npm run astro ...`: Use this for custom Astro commands.

## Project Structure

```
├── public/ # Static assets (e.g., images, fonts)
├── src/
│ ├── components/ # Reusable components (e.g., buttons, headers)
│ ├── layouts/ # Layouts for different page types
│ ├── pages/ # Your page content (in .astro or .mdx)
│ ├── styles/ # Global CSS or Tailwind styles
│ └── content/ # MDX content, easily extendable
├── package.json # Project scripts and dependencies
└── astro.config.mjs # Astro configuration
```

- `components/`: Contains reusable components like navigation, buttons, etc.
- `layouts/`: Defines page layouts (e.g., blog post, homepage).
- `pages/`: All your main site pages (e.g., /index.astro, /about.astro).
- `content/`: For MDX-based content management.
- `styles/`: Custom global styles using Tailwind CSS.

## Customization

- Styling: Modify src/styles and tweak Tailwind CSS as needed.
- MDX Pages: Easily add interactive React components within your Markdown using MDX.
- SEO Tags: Adjust meta tags in each page or globally in layouts/.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
