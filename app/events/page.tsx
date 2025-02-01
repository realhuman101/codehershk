import Image from "next/image";
import Link from "next/link";

export default function CurrentEventsPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Current Events
        </h1>
        <p className="text-text-700 text-lg">
          Check out what we have going on right now!
        </p>
      </section>

      {/* Event Cards (simplified, no flip) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-bold text-text-900">CodeHers 2025</h3>
          <p className="text-text-700">
            Our annual flagship event! Join us for workshops, talks, and fun.
          </p>
          <Link
            href="/events/2025"
            className="inline-block px-4 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
          >
            Learn More
          </Link>
        </div>

        <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-bold text-text-900">Hackathon</h3>
          <p className="text-text-700">
            Join our day-long hackathon to tackle real-world problems with code.
          </p>
          <Link
            href="/events/hackathon"
            className="inline-block px-4 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* “Catching Up with CodeHers” (Instagram) */}
      <section className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-bold text-text-900">
          Catching Up with CodeHers
        </h2>
        <p className="text-text-700">Check out our latest Instagram post!</p>
        <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
          {/* Replace with an actual Instagram embed or your own photo */}
          <Image
            src="/instagram-placeholder.jpg"
            alt="Instagram Post"
            fill
            className="object-cover"
          />
        </div>
        <Link
          href="https://instagram.com/codehershk"
          target="_blank"
          className="inline-block px-4 py-2 text-base font-medium leading-loose text-white rounded-lg bg-accent-500 hover:bg-accent-600 transition-all"
        >
          See More on Instagram
        </Link>
      </section>
    </main>
  );
}
