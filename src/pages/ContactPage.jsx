import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContactPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`mx-auto max-w-2xl rounded-2xl border p-8 shadow-sm ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800"
          : "border-gray-200 bg-white"
      }`}
    >
      <h2
        className={`mb-6 text-3xl font-bold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Contact Us
      </h2>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your name"
          className={`w-full rounded-lg border px-4 py-3 ${
            theme === "dark"
              ? "border-gray-600 bg-gray-900 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
          }`}
        />

        <input
          type="email"
          placeholder="Your email"
          className={`w-full rounded-lg border px-4 py-3 ${
            theme === "dark"
              ? "border-gray-600 bg-gray-900 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
          }`}
        />

        <textarea
          rows="5"
          placeholder="Your message"
          className={`w-full rounded-lg border px-4 py-3 ${
            theme === "dark"
              ? "border-gray-600 bg-gray-900 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
          }`}
        ></textarea>

        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;