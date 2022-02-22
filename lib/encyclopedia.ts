import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// TODO(deps): Use micromark or MDX instead.
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { WorldAreaData, WorldId } from '../utils';

export interface EncyclopediaEntry {
  category: string;
  id: string;
  title: string;
}

export interface FullEncyclopediaEntry extends EncyclopediaEntry {
  contentHtml: string;
}

function buildEntryMetadata(
  id: string,
  { category, title }: { [key: string]: any }
): EncyclopediaEntry {
  return {
    category: category || '',
    id,
    title: title || '',
  };
}

function getEncyclopediaEntryId(fileName: string): string {
  return fileName.replace(/\.md$/, '');
}

function getWorldEncyclopediaPath(worldId: WorldId): string {
  return path.join(process.cwd(), WorldAreaData.ENCYCLOPEDIA.id, worldId);
}

export function getAllEncyclopediaEntryIds(worldId: WorldId): string[] {
  return fs
    .readdirSync(getWorldEncyclopediaPath(worldId))
    .map(getEncyclopediaEntryId);
}

export function getAllEncyclopediaEntries(
  worldId: WorldId
): EncyclopediaEntry[] {
  const dir = getWorldEncyclopediaPath(worldId);

  return fs
    .readdirSync(dir)
    .map((fileName) =>
      buildEntryMetadata(
        getEncyclopediaEntryId(fileName),
        matter(fs.readFileSync(path.join(dir, fileName), 'utf8')).data
      )
    );
}

export async function getEncyclopediaEntry(
  worldId: WorldId,
  id: string
): Promise<FullEncyclopediaEntry> {
  const { content, data } = matter(
    fs.readFileSync(
      path.join(getWorldEncyclopediaPath(worldId), `${id}.md`),
      'utf8'
    )
  );

  return {
    ...buildEntryMetadata(id, data),
    contentHtml: (
      await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content)
    ).toString(),
  };
}
