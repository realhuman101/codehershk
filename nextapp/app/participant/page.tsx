import ParticipantInfo from './ParticipantInfo';
import getParticipantInfo from "../components/GetParticipantInfo";
import getWorkshops from "../components/GetWorkshopsData";

export default async function Participant() {
  const participantData = await getParticipantInfo();
  const workshops = await getWorkshops();

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 py-10">
      <h2 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl text-center">
        Participant Info
      </h2>
      <ParticipantInfo participants={participantData} workshops={ workshops } />
    </main>
  );
}