import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/blog/CommentSection";
import { ThemeContext } from "../context/ThemeContext";

function IndividualPostPage() {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);

        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
        );
      })
      .then((response) => setUser(response.data))
      .catch((error) =>
        console.error("Error fetching post or user:", error)
      );
  }, [id]);

  if (!post) {
    return (
      <section className="text-center">
        <h2
          className={`mb-4 text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Post Not Found
        </h2>
        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
          The blog post you are looking for does not exist.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <article
        className={`rounded-2xl border p-8 shadow-sm ${
          theme === "dark"
            ? "border-gray-700 bg-gray-800"
            : "border-gray-200 bg-white"
        }`}
      >
        <h2
          className={`mb-4 text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {post.title}
        </h2>

        {user && (
          <div
            className={`mb-6 text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <p>Author: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}

        <p
          className={`leading-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {post.body}
        </p>
      </article>

      <CommentSection />
    </section>
  );
}

export default IndividualPostPage;