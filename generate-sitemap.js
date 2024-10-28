import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/peliculas', changefreq: 'weekly', priority: 0.8 },
  { url: '/peliculas-con-graphql', changefreq: 'weekly', priority: 0.7 },
  // Añade aquí el resto de las rutas de tu aplicación
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://demo-contentful-and-seo.vercel.app' });
  const writeStream = createWriteStream(path.resolve('public', 'sitemap.xml'));

  // Redirige el flujo de datos al archivo sitemap.xml
  sitemapStream.pipe(writeStream);

  // Escribe cada URL en el flujo del sitemap
  for (const url of urls) {
    console.log(`Añadiendo URL al sitemap: ${url.url}`);
    sitemapStream.write(url);
  }

  // Finaliza el flujo de escritura
  sitemapStream.end();

  // Utiliza streamToPromise para esperar a que se complete la escritura
  await streamToPromise(sitemapStream);
  
  console.log('✅ sitemap.xml generado con éxito');
}

// Llama a la función para generar el sitemap
generateSitemap();
