"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EventArchivePage() {
  const [selectedYear, setSelectedYear] = useState<"2024" | "2023" | "2022">(
    "2024"
  );

  const eventsData = {
    "2024": {
      funFact: "We doubled attendance in our second year, hosting 300 participants!",
      participants: 300,
      workshops: 5,
      photos: ["/photos/2024-1.jpg", "/photos/2024-2.jpg"],
    },
    "2023": {
      funFact: "Our first official CodeHers event with 200 participants!",
      participants: 200,
      workshops: 3,
      photos: ["/photos/2023-1.jpg", "/photos/2023-2.jpg"],
    },
    "2022": {
      funFact: "A small pilot with just 50 participants—big ideas start small!",
      participants: 50,
      workshops: 1,
      photos: ["/photos/2022-1.jpg"],
    },
  } as const;

  const current = eventsData[selectedYear];

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Event Archive
        </h1>
        <p className="text-text-700 text-lg">
          Look back at our past events and see how far CodeHers has come!
        </p>
      </section>

      {/* Year Buttons */}
      <section className="flex space-x-3">
        {(["2024", "2023", "2022"] as const).map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 text-base font-medium rounded-lg transition-all ${
              selectedYear === year
                ? "bg-primary-500 text-white"
                : "bg-secondary-100 text-text-800 hover:bg-secondary-200"
            }`}
          >
            {year}
          </button>
        ))}
      </section>

      {/* Display Info */}
      <section className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-bold text-text-900">
          Archive for {selectedYear}
        </h2>
        <p className="text-text-600 italic">Fun Fact: {current.funFact}</p>
        <p className="text-text-700">
          Participants: <strong>{current.participants}</strong> &middot;
          Workshops: <strong>{current.workshops}</strong>
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {current.photos.map((src) => (
            <div key={src} className="relative w-full h-32 bg-gray-200 rounded">
              <Image src={src} alt="Event Photo" fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="flex space-x-3 pt-2">
          <Link
            href="/current-events"
            className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all"
          >
            Check Current Event
          </Link>
          <Link
            href="/partner"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
