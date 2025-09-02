import fs from "node:fs/promises";

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


await fs.writeFile('dist/sitemap.xml', sitemap);

const link = '<link rel="sitemap" type="application/xml" title="Sitemap" href="https://adilet.dev/sitemap.xml">';

const index = 'dist/index.html';
let html = await fs.readFile(index, 'utf-8');
const insertPosition = html.indexOf('</head>');
html = html.substring(0, insertPosition) + `\n        ${link}\n        ` + html.substring(insertPosition);
await fs.writeFile(index, html);