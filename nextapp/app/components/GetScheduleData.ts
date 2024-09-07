import { promises as fs } from 'fs';

export default async function getScheduleData () : Promise<any> {
  const file = await fs.readFile(process.cwd() + '/app/data/schedule.json', 'utf8');
  const scheduleData = JSON.parse(file)

  return scheduleData["sessions"];
}