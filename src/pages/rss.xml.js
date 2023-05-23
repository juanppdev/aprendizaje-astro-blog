import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Alumno | Blog',
    description: 'Mi viajee de aprendizaje de Astro',
    site: 'http://localhost:3000',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: '<languaje>es-es</languaje>',
  });
}