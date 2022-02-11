import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { WorldData } from '../utils';

export interface EncyclopediaEntry {
  category: string;
  id: string;
  title: string;
}

export function parseEncyclopedia(
  worldId: typeof WorldData[keyof typeof WorldData]['id']
): EncyclopediaEntry[] {
  const dir = path.join(process.cwd(), 'encyclopedia', worldId);

  return fs.readdirSync(dir).map((fileName) => {
    const fileContent = fs.readFileSync(path.join(dir, fileName), 'utf8');
    const { category, title } = matter(fileContent).data;

    return {
      category: category || '',
      id: fileName.replace(/\.md$/, ''),
      title: title || '',
    };
  });
}
