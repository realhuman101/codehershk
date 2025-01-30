"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // If you have an API route, call it here:
      // await fetch("/api/contact", {...})
      setStatus("submitted");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title */}
      <section className="pt-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-2">
          Contact Us
        </h1>
        <p className="text-text-700 text-lg">
          Questions, suggestions, or ideas? We’d love to hear from you!
        </p>
      </section>

      {/* Form */}
      <section className="p-6 bg-white rounded-xl shadow space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-text-800"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-text-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-text-800"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
          >
            Send
          </button>
        </form>

        {/* Feedback */}
        {status === "submitted" && (
          <p className="mt-2 text-green-600">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="mt-2 text-red-600">Oops, something went wrong. Please try again.</p>
        )}
      </section>

      {/* Additional Contact */}
      <section className="space-y-2 pb-8">
        <p className="text-text-600">
          Prefer email? Reach us at:{" "}
          <a href="mailto:codehers@example.com" className="text-primary-500 underline">
            codehers@example.com
          </a>
        </p>
        <p className="text-text-600">
          Or find us on Instagram:{" "}
          <a
            href="https://instagram.com/yourcodehersaccount"
            target="_blank"
            rel="noreferrer"
            className="text-primary-500 underline"
          >
            @yourcodehersaccount
          </a>
        </p>
      </section>
    </main>
  );
}
