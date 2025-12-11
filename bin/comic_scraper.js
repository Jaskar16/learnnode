
import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from 'md5';

const sleep = ms => new Promise(r => setTimeout(r, ms));
const cacheDir = import.meta.dirname + '/../cache';

if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
}

const BASE_URL = 'https://www.smbc-comics.com';
let url = BASE_URL + '/comic/last';

for (let i = 0; i < 10; i++) {
    console.log(`\n=== LEHT ${i + 1} ===`);
    console.log('Laen:', url);

    let body;
    const cacheFile = `${cacheDir}/${md5(url)}.html`;

    if (fs.existsSync(cacheFile)) {
        body = fs.readFileSync(cacheFile, 'utf8');
        console.log('(kasutan cache’i)');
    } else {
        console.log('(laen veebist, ootan 1s...)');
        await sleep(1000);
        const res = await fetch(url);
        body = await res.text();
        fs.writeFileSync(cacheFile, body);
    }

    const $ = cheerio.load(body);

    let img = $('#cc-comic, img#cc-comic, .cc-comicbody img').first();

    if (!img || !img.attr('src')) {
        console.log('Ei leidnud koomiksi pilti :(');
    } else {
        let src = img.attr('src');
        const alt = img.attr('alt') || '';
        const title = img.attr('title') || '';

        if (!src.startsWith('http')) {
            src = BASE_URL + src;
        }

        console.log('Koomiksi pilt   :', src);
        console.log('Alt-text        :', alt);
        console.log('Title (hover)   :', title);
    }

    let prev = $('a[rel="prev"], a.cc-prev, a:contains("Prev")').first();
    let href = prev.attr('href');

    if (!href) {
        console.log('Ei leidnud eelmise koomiksi linki, katkestan.');
        break;
    }

    if (!href.startsWith('http')) {
        href = BASE_URL + href;
    }

    url = href;
}
