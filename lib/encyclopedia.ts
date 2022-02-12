import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// TODO(deps): Use micromark or MDX instead.
import { remark } from 'remark';
import remarkHtml from 'remark-html';

import { SiteAreaData, WorldId } from '../utils';

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

function getEntryId(fileName: string): string {
  return fileName.replace(/\.md$/, '');
}

function getWorldPath(worldId: WorldId): string {
  return path.join(process.cwd(), SiteAreaData.ENCYCLOPEDIA.id, worldId);
}

export function getAllEntryIds(worldId: WorldId): string[] {
  return fs.readdirSync(getWorldPath(worldId)).map(getEntryId);
}

export function getAllEntries(worldId: WorldId): EncyclopediaEntry[] {
  const dir = getWorldPath(worldId);

  return fs
    .readdirSync(dir)
    .map((fileName) =>
      buildEntryMetadata(
        getEntryId(fileName),
        matter(fs.readFileSync(path.join(dir, fileName), 'utf8')).data
      )
    );
}

export async function getEntry(
  worldId: WorldId,
  id: string
): Promise<FullEncyclopediaEntry> {
  const { content, data } = matter(
    fs.readFileSync(path.join(getWorldPath(worldId), `${id}.md`), 'utf8')
  );

  return {
    ...buildEntryMetadata(id, data),
    contentHtml: (await remark().use(remarkHtml).process(content)).toString(),
  };
}
