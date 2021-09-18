import { SitemapStream, streamToPromise } from 'sitemap'

const pagesDir = './pages/';
const fs = require('fs');

export default async(req, res) => {
    let allPages = []

    try {
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
            cacheTime: 600000,
        });

        fs.readdir(pagesDir, (err, files) => {
            files.forEach(file => {
                // if(file !== '_app.js') {
                    allPages.push(file)
                // }
            });
        });

        allPages.forEach(page => {
            smStream.write({
                url: `/${page}`,
                changefreq: 'daily',
                priority: 0.9
            });
        });

        smStream.end();

        const sitemapOutput = (await streamToPromise(smStream)).toString();

        res.writeHead(200, {
          'Content-Type': 'application/xml'
        });
    
        res.end(sitemapOutput);
    } catch(e) {
        res.send(JSON.stringify(e))
    }
}