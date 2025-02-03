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

      {/* Event Cards (Updated with Sign-Up Buttons) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CodeHers 2025 Event */}
        <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-bold text-text-900">CodeHers 2025</h3>
          <p className="text-text-700">
            Our annual flagship event! Join us for workshops, talks, and fun.
          </p>
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/events/2025"
              className="relative top-0 inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Learn More
            </Link>
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeecJLOzCaWIQ5ox6ofmv31NsMSm2gsM6k30e6_eY92oIJrbA/viewform"
                className="relative top-0 inline-flex items-center justify-center w-full px-6 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Hackathon Event */}
        <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-bold text-text-900">Hackathon</h3>
          <p className="text-text-700">
            Join our day-long hackathon to tackle real-world problems with code.
          </p>
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/events/hackathon"
              className="relative top-0 inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Learn More
            </Link>
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScK8JcGJ2BzGq4H7bG9NzxM0tWpjC0rJmpVg/viewform"
                className="relative top-0 inline-flex items-center justify-center w-full px-6 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>
          </div>
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
