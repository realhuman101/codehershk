"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// Splide carousel imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function AboutPage() {
  const isProd = process.env.NODE_ENV === "production";

  // Carousel data. Add or remove entries as needed.
  const organizingTeams = [
    {
      school: "Victoria Shanghai Academy",
      imagePath: "/team/students/.jpg",
      description:
        "VSA’s representatives are passionate about AI, data science, and bridging gender gaps across HK’s tech community.",
    },
    {
      school: "King George V School",
      imagePath: "/team/students/KGV.png",
      description:
        "The KGV team focuses on web development and hackathons, inspiring girls to learn by building real projects.",
    },
    {
      school: "Sha Tin College (STC)",
      imagePath: "/team/students/STC.jpg",
      description:
        "At STC, the Code For Life group fosters a supportive environment to spark girls’ interest in coding.",
    },
    // Add more as needed...
  ];

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

      {/*
      -------------------------------------------------------------------------------------
      BACKSTORY SECTION (COMMENTED OUT)
      -------------------------------------------------------------------------------------
      <section className="mt-4 space-y-4">
        <h2 className="text-2xl font-bold text-text-800">Our Backstory</h2>
        <p className="text-text-600 leading-relaxed">
          [ ... original backstory content ... ]
        </p>
        <p className="text-text-600 leading-relaxed">
          [ ... more text about the creation of CodeHers ... ]
        </p>
      </section>
      -------------------------------------------------------------------------------------
      */}

      {/* Our Core Team Carousel */}
      <section className="mt-4 space-y-4">
        <h2 className="text-2xl font-bold text-text-800">Our Core Team</h2>
        <p className="text-text-600">
          Meet the amazing people from various schools who make CodeHers
          possible! Each group brings unique skills and passion for tech.
        </p>

        <Splide
          options={{
            type: "loop",
            drag: "free",
            gap: "1rem",
            autoWidth: true,
            arrows: true,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
              pauseOnFocus: false,
            },
          }}
          extensions={{ AutoScroll }}
          className="overflow-hidden py-2"
        >
          {organizingTeams.map((team, idx) => (
            <SplideSlide key={idx} className="flex justify-center">
              <div className="bg-white rounded-lg shadow p-4 w-72 h-[330px] flex flex-col items-center">
                <div className="relative w-full h-48 overflow-hidden rounded">
                  <Image
                    src={
                      isProd
                        ? "/codehershk/" + team.imagePath.replace(/^\/+/, "")
                        : team.imagePath
                    }
                    alt={`Group from ${team.school}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-900 mt-3">
                  {team.school}
                </h3>
                <p className="text-text-600 text-sm mt-1 text-center">
                  {team.description}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
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
          <p className="text-text-600">
            Empowering <strong>her</strong> future.
          </p>
        </div>
      </section>

      {/* FAQ Section with MotionJS */}
      <section className="pb-4">
        <h2 className="text-2xl font-bold text-text-900 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col space-y-2">
          <FAQItem
            question="Who can join CodeHers events?"
            answer="Any high-school Hong Kong student who identifies as female (or non-binary) is welcome to join our events! We won't be restricting signups, however we prioritize slots for those who fit this demographic."
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
          <FAQItem
            question="What if I'm not in any of your partnering schools?"
            answer="That's perfectly fine! Signups are open to any Hong Kong student from any school!"
          />
          <FAQItem
            question="What are the prerequisites to attending your event?"
            answer="As long as you have a laptop with WiFi access and are a high-school student in Hong Kong, you can attend our event! No knowledge or other prerequisites are required!"
          />
          <FAQItem
            question="I want to help support your event as a student, how can I help?"
            answer="We're glad to hear you're interested! Look out for a posting for support staff, photographers, or workshop hosts through your school's bulletin or at our Instagram. If you'd like to join our organizing team (restricted to students of our partner schools), speak to a CS teacher or teacher rep at your school, or reach out to us for more info."
          />
          <FAQItem
            question="Why run a girls-only event?"
            answer={
              <>
                Girls-only coding events like CodeHers address the ongoing gender
                disparity in tech by creating an empowering space for young girls
                to explore coding without bias.&nbsp;
                <Link
                  href="/about/girls-only"
                  className="text-primary-500 underline hover:text-primary-600"
                >
                  Read more in our dedicated article
                </Link>.
              </>
            }
          />
        </div>
      </section>

      {/* CTA */}
      <section className="pt-2 pb-8">
        <h2 className="text-2xl font-bold text-text-900 mb-2">
          Any other questions?
        </h2>
        <p className="text-text-700 mb-4">
          We’re more than happy to help you out!
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

/** FAQItem - expands/collapses on click */
function FAQItem({ question, answer }: { question: string; answer: ReactNode }) {
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
