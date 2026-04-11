import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function CommentForm({
  name,
  comment,
  setName,
  setComment,
  handleSubmit,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
          theme === "dark"
            ? "border-gray-600 bg-gray-900 text-white placeholder-gray-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        }`}
      />

      <textarea
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
          theme === "dark"
            ? "border-gray-600 bg-gray-900 text-white placeholder-gray-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        }`}
      ></textarea>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;