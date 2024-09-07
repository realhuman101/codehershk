import { promises as fs } from 'fs';

export default async function getParticipantInfo () : Promise<any> {
  const file = await fs.readFile(process.cwd() + '/app/data/participants.json', 'utf8');
  const participantData = JSON.parse(file)

  // participantData.filter((participant: any) => participant.email === email);

  return participantData["participants"];
}