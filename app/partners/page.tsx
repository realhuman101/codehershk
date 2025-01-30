import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnerPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Partner With Us
        </h1>
        <p className="text-text-700 text-lg">
          Want to support CodeHers? Here are some ways you can get involved.
        </p>
      </section>

      {/* Carousel of existing partners or sponsor images */}
      <section className="bg-secondary-500/10 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-text-900 mb-4">
          Our Sponsors & Partners
        </h2>
        {/* Example horizontal carousel with motion */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: -20 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
          >
            {/* Replace with your sponsor images */}
            {["/partner1.png", "/partner2.png", "/partner3.png"].map((img) => (
              <div
                key={img}
                className="w-40 h-20 flex-shrink-0 bg-white rounded-lg shadow flex items-center justify-center"
              >
                <Image src={img} alt="" width={100} height={40} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3 ways to partner */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PartnerCard
          title="Sponsor Our Events"
          description="Help fund workshops, prizes, or resources for participants."
        />
        <PartnerCard
          title="Host Workshops"
          description="Offer a coding workshop, panel, or talk to inspire students."
        />
        <PartnerCard
          title="Spread the Word"
          description="Use your network to amplify CodeHers events and mission."
        />
      </section>

      {/* CTA */}
      <section className="pb-8">
        <h2 className="text-2xl font-bold text-text-900 mb-2">
          Have Another Idea?
        </h2>
        <p className="text-text-700 mb-4">
          We’re open to creative forms of support—get in touch:
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

function PartnerCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-2">
      <h3 className="text-xl font-semibold text-text-900">{title}</h3>
      <p className="text-text-600">{description}</p>
    </div>
  );
}
