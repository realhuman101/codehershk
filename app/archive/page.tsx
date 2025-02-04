"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import pics25 from "../components/pics25";

// 1) Import the Splide components and default CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function EventArchivePage() {
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const eventsData = {
    "2024": {
      funFact: "Our first event!",
      participants: 300,
      workshops: 25,
      photos: pics25,
    },
    // "2023": { ... },
    // "2022": { ... },
  } as const;

  //@ts-expect-error stfu
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
        {Object.keys(eventsData).map((year) => (
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

        {/* Infinite Carousel with Splide */}
        <Splide
          className="mt-4"
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,      // Auto-start sliding
            interval: 3000,      // Delay between slides in ms
            pauseOnHover: false, // Don't pause on hover
            perPage: 2,          // How many slides per page
            arrows: false,       // Hide next/prev arrows if you prefer
            pagination: true,    // Show dots (pagination)
          }}
          aria-label="Event Photos"
        >
          {/* @ts-expect-error stfu */}
          {current.photos.map((src) => (
            <SplideSlide key={src}>
              <div className="relative w-full h-32 bg-gray-200 rounded">
                <Image
                  src={src}
                  alt="Event Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="flex space-x-3 pt-2">
          <Link
            href="/events"
            className="px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all"
          >
            Check Current Event
          </Link>
          <Link
            href="/partners"
            className="px-4 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
