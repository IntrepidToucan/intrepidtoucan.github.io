import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// TODO(deps): Use micromark or MDX instead.
import { remark } from 'remark';
import remarkHtml from 'remark-html';

import { SiteAreaData, WorldId } from '../utils';

export interface LoreEntry {
  id: string;
  title?: string;
}

export interface FullLoreEntry extends LoreEntry {
  contentHtml: string;
}

function buildEntryMetadata(
  id: string,
  { title }: { [key: string]: any }
): LoreEntry {
  return { id, title };
}

function getLoreEntryId(fileName: string): string {
  return fileName.replace(/\.md$/, '');
}

function getWorldPath(worldId: WorldId): string {
  return path.join(process.cwd(), SiteAreaData.LORE.id, worldId, 'main');
}

export function getAllLoreEntryIds(worldId: WorldId): string[] {
  return fs.readdirSync(getWorldPath(worldId)).map(getLoreEntryId);
}

export function getAllLoreEntries(worldId: WorldId): LoreEntry[] {
  const dir = getWorldPath(worldId);

  return fs
    .readdirSync(dir)
    .map((fileName) =>
      buildEntryMetadata(
        getLoreEntryId(fileName),
        matter(fs.readFileSync(path.join(dir, fileName), 'utf8')).data
      )
    );
}

export async function getLoreEntry(
  worldId: WorldId,
  id: string
): Promise<FullLoreEntry> {
  const { content, data } = matter(
    fs.readFileSync(path.join(getWorldPath(worldId), `${id}.md`), 'utf8')
  );

  return {
    ...buildEntryMetadata(id, data),
    contentHtml: (await remark().use(remarkHtml).process(content)).toString(),
  };
}
