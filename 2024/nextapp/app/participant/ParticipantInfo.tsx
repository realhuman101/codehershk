"use client";

import { useSearchParams } from "next/navigation";

export default function ParticipantInfo({
  participants,
  workshops,
}: {
  participants: any[];
  workshops: any[];
}) {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const participant = participants.filter(
    (participant: any) => participant.email === email
  )[0];

  if (participant == null) {
    return <p>Participant not found</p>;
  }

  const participantWorkshops = participant["workshopIDs"].map(
    (workshopId: any) => {
      return workshops.filter((workshop: any) => workshop.id === workshopId)[0];
    }
  );

  console.log(participant);

  return (
    <div className="flex flex-col text-text-700 mt-8 items-center">
      <div className="overflow-hidden shadow rounded-lg max-w-lg w-full">
        <div className="border-t border-secondary-100/30">
          <dl>
            <div className="px-4 py-5 bg-secondary-100/30 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-text-500">Full name</dt>
              <dd className="mt-1 text-sm text-text-900 sm:mt-0 sm:col-span-2">
                {participant.name}
              </dd>
            </div>
            <div className="px-4 py-5 bg-secondary-100/10 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-text-500">Email</dt>
              <dd className="mt-1 text-sm text-text-900 sm:mt-0 sm:col-span-2">
                {participant.email}
              </dd>
            </div>
            <div className="px-4 py-5 bg-secondary-100/30 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-text-500">Workshops</dt>
              <dd className="mt-1 text-sm text-text-900 sm:mt-0 sm:col-span-2">
                <ul>
                  {participantWorkshops.map((workshop: any, index: any) => {
                    return <li key={index}>{workshop.title}</li>;
                  })}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
