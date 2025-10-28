# Zack Hall - Personal Website

Front-end developer portfolio and blog, built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with live reload:

```bash
npm run dev
```

This runs both Eleventy dev server and PostCSS watcher in parallel.

Visit `http://localhost:8080` to view the site.

### Build

Build the production site:

```bash
npm run build
```

The built site will be in the `_site` directory.

### Other Commands

- `npm run clean` - Remove the `_site` directory
- `npm run format` - Format code with Prettier
- `npm run deploy` - Build and deploy the site

## 📁 Project Structure

```
.
├── content/
│   ├── assets/          # Images and static assets
│   └── blog/            # Blog posts in Markdown
├── src/
│   ├── _includes/       # Nunjucks templates and layouts
│   ├── _data/           # Global data files
│   └── styles/          # CSS files
├── .eleventy.js         # Eleventy configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── index.njk            # Homepage
├── notes.njk            # Blog listing page
├── contact.njk          # Contact/About page
└── 404.njk              # 404 error page
```

## 🎨 Features

- Static site generation with Eleventy
- Tailwind CSS for styling
- Syntax highlighting for code blocks
- Markdown blog posts with frontmatter
- SEO optimized with meta tags
- RSS feed support
- Responsive design

## 📝 Writing Blog Posts

Create a new Markdown file in `content/blog/` with the following frontmatter:

```markdown
---
title: Your Post Title
date: 2025-01-01
description: A brief description of your post
---

Your content here...
```

## 🛠️ Technology Stack

- **Static Site Generator:** Eleventy
- **Templating:** Nunjucks
- **Styling:** Tailwind CSS, PostCSS
- **Content:** Markdown
- **Syntax Highlighting:** Prism.js (via @11ty/eleventy-plugin-syntaxhighlight)

## 📄 License

See LICENSE file for details.

## 🔗 Links

- Website: [zthall.com](https://zthall.com)
- Twitter: [@zthall](https://twitter.com/zthall)
- GitHub: [@zackhall](https://github.com/zackhall)
