const fs = require('fs');
const path = require('path');

const baseUrl = 'https://socailai.com';

// 1. Static Routes from your App.tsx
const staticRoutes = [
  '',               // Home (/)
  '/services',      // Services
  '/contact',       // Contact
  '/blogs',         // Blogs list
  '/privacy-policy',
  '/terms-conditions',
];

// 2. Dynamic Blog Routes
// This assumes your blog posts are .md or .mdx files in a /content or /src/blogs folder
const blogContentDirectory = path.join(process.cwd(), 'src/content/blogs'); 
let blogRoutes = [];

if (fs.existsSync(blogContentDirectory)) {
  const files = fs.readdirSync(blogContentDirectory);
  blogRoutes = files
    .filter((file) => /\.(md|mdx|json)$/.test(file)) // adjust based on your data format
    .map((file) => `/blogs/${file.replace(/\.(md|mdx|json)$/, '')}`);
}

const allRoutes = [...staticRoutes, ...blogRoutes];

// 3. Generate XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      const isHome = route === '';
      return `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${isHome ? 'daily' : 'weekly'}</changefreq>
      <priority>${isHome ? '1.0' : '0.8'}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

// 4. Save to Public folder
const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemapXml);

console.log(`✅ Sitemap generated with ${allRoutes.length} routes at ${publicPath}`);