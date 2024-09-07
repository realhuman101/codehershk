import { promises as fs } from 'fs';

export default async function getWorkshopsData () : Promise<any> {
  const file = await fs.readFile(process.cwd() + '/app/data/workshops.json', 'utf8');
  const workshopData = JSON.parse(file)

  return workshopData["workshops"];
}