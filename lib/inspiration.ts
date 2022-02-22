import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// TODO(deps): Use micromark or MDX instead.
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { GlobalAreaData } from '../utils';

export interface InspirationEntry {
  category: string;
  id: string;
  title: string;
}

export interface FullInspirationEntry extends InspirationEntry {
  contentHtml: string;
}

function buildEntryMetadata(
  id: string,
  { category, title }: { [key: string]: any }
): InspirationEntry {
  return {
    category: category || '',
    id,
    title: title || '',
  };
}

function getInspirationEntryId(fileName: string): string {
  return fileName.replace(/\.md$/, '');
}

function getInspirationPath(): string {
  return path.join(process.cwd(), GlobalAreaData.INSPIRATION.id);
}

export function getAllInspirationEntryIds(): string[] {
  return fs.readdirSync(getInspirationPath()).map(getInspirationEntryId);
}

export function getAllInspirationEntries(): InspirationEntry[] {
  const dir = getInspirationPath();

  return fs
    .readdirSync(dir)
    .map((fileName) =>
      buildEntryMetadata(
        getInspirationEntryId(fileName),
        matter(fs.readFileSync(path.join(dir, fileName), 'utf8')).data
      )
    );
}

export async function getInspirationEntry(
  id: string
): Promise<FullInspirationEntry> {
  const { content, data } = matter(
    fs.readFileSync(path.join(getInspirationPath(), `${id}.md`), 'utf8')
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
