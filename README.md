# Personal Website

A personal website built with Next.js, featuring About and Writing sections with a minimal black and white design.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and components
  - `layout.tsx` - Root layout with navigation and footer
  - `page.tsx` - Home page
  - `about/` - About page
  - `writing/` - Writing page
  - `components/Footer.tsx` - Footer component with social links
  - `globals.css` - Global styles with black background and white text

## Features

- Black background with white text
- Navigation between About and Writing sections
- Sticky footer with email, LinkedIn, and Substack links
- Responsive design
- Ready for markdown-based blog posts

## Customization

Update the footer links in `app/components/Footer.tsx` with your actual email, LinkedIn, and Substack URLs.

