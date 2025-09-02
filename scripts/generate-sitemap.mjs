import fs from "node:fs";

const lastmod = new Date().toISOString().split('T')[0];

const urls = [
    'https://adilet.dev/',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => 
`    <url>
        <loc>${u}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>1.0</priority>
    </url>`
).join('\n')}
</urlset>
`;


fs.writeFileSync('dist/sitemap.xml', sitemap);
