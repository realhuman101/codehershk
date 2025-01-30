"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title Section */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          About Us
        </h1>
        <p className="text-text-700 text-lg">
          We are CodeHers, a team of girls from different schools brought
          together by our passion for technology. Our mission is to empower
          the next generation of women in STEM.
        </p>
      </section>

      {/* Core Committee / Photo */}
      <section className="flex flex-col-reverse gap-8 mt-4 lg:flex-row">
        <div className="flex flex-col lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-text-800">
            CodeHers 2025 Core Committee
          </h2>
          <p className="text-text-600 leading-relaxed">
            Our core committee fosters creativity, collaboration, and confidence
            in STEAM fields. We believe in bridging the gender gap through fun,
            hands-on workshops, hackathons, and community support.
          </p>
          <Link
            href="/current-events"
            className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all w-fit"
          >
            See Our Current Events
          </Link>
        </div>
        <div className="relative w-full h-56 bg-gray-200 rounded-lg lg:w-1/2 md:h-72">
          <Image
            src="/core-team-placeholder.jpg"
            alt="Core Committee Photo"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-text-900 mb-2">
            Our Vision
          </h3>
          <p className="text-text-600">
            Empowering girls to become the future leaders of technology.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-text-900 mb-2">
            Our Mission
          </h3>
          <p className="text-text-600">
            Break down stereotypes, encourage STEAM exploration, and build
            confidence in young women.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-text-900 mb-2">
            Our Motto
          </h3>
          <p className="text-text-600">Empowering <strong>her</strong> future.</p>
        </div>
      </section>

      {/* FAQ Section with MotionJS */}
      <section className="pb-4">
        <h2 className="text-2xl font-bold text-text-900 mb-4">FAQs</h2>
        <div className="flex flex-col space-y-2">
          <FAQItem
            question="Who can join CodeHers events?"
            answer="Any student who identifies as female (or non-binary) is welcome to join our events, typically ranging from upper primary to high school students."
          />
          <FAQItem
            question="Do I need prior coding experience?"
            answer="Not at all! Our workshops cater to beginners as well as more experienced coders. We love seeing new faces in tech!"
          />
          <FAQItem
            question="How often do you run events?"
            answer="We host at least one major event each year, plus smaller workshops or meetups throughout the year. Check our Current Events page to stay updated."
          />
          <FAQItem
            question="Is there a fee to participate?"
            answer="Most of our events are free, thanks to sponsors and partners who share our mission of making tech accessible to all."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="pt-2 pb-8">
        <h2 className="text-2xl font-bold text-text-900 mb-2">Get Involved</h2>
        <p className="text-text-700 mb-4">
          We’re always excited to hear new ways we can collaborate!
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-accent-500 hover:bg-accent-600 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary-500/10 rounded-lg p-4 shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between focus:outline-none"
      >
        <span className="text-text-900 font-semibold">{question}</span>
        <span className="text-text-600 ml-2">{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="text-text-600 mt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
