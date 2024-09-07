import { promises as fs } from 'fs';

export default async function getWorkshopsCategories () : Promise<any> {
  const file = await fs.readFile(process.cwd() + '/app/data/workshopsCategories.json', 'utf8');
  const workshopsCategories = JSON.parse(file)

  return workshopsCategories["workshopsCategories"];
}