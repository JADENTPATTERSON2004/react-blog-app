import { useContext, useEffect, useState } from "react";
import BlogList from "../components/blog/BlogList";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

function BlogPostsPage() {
  const { theme } = useContext(ThemeContext);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setBlogPosts(response.data))
      .catch((error) =>
        console.error("Error fetching blog posts:", error)
      );
}, []);

  return (
    <>
      <section className="mb-8 text-center">
        <h2
          className={`mb-2 text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome to My Blog
        </h2>
        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
          Read the latest posts about React, Vite, and Tailwind CSS.
        </p>
      </section>

      <BlogList posts={blogPosts} />
    </>
  );
}

export default BlogPostsPage;