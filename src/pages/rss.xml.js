import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Making Mythology',
    description: 'Worldbuilding, animation, and music composition',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./works/*.md')),
    customData: `<language>en-us</language>`,
  });
}