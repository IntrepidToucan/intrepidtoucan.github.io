import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { SITE_TITLE } from '../utils';

export async function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: 'Fantasy worldbuilding, music composition, and 3D modeling',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./works/*.md?(x)')),
    customData: `<language>en-us</language>`,
  });
}