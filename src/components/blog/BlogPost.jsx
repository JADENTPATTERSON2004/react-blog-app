import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThumbsUp } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

function BlogPost({ id, title, content, author, date }) {
  const { theme } = useContext(ThemeContext);
  const [likes, setLikes] = useState(0);

  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800"
          : "border-gray-200 bg-white"
      }`}
    >
      <h2
        className={`mb-3 text-2xl font-bold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mb-4 leading-7 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {content}
      </p>

      <div
        className={`mb-4 text-sm ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <p>Author: {author}</p>
        <p>Published: {date}</p>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={`/post/${id}`}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            theme === "dark"
              ? "bg-white text-gray-900 hover:bg-gray-200"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          Read More
        </Link>

        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <ThumbsUp size={18} />
          <span>{likes}</span>
        </button>
      </div>
    </article>
  );
}

export default BlogPost;