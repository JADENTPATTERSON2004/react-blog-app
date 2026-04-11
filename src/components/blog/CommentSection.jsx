import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import axios from "axios";


function CommentSection() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const apiComments = response.data.map((c) => ({
          name: c.name,
          text: c.body,
        }));
        setComments(apiComments);
      })
      .catch((error) =>
        console.error("Error fetching comments:", error)
      );
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) return;

    axios
      .post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        name: name,
        body: comment,
      })
      .then((response) => {
        const newComment = {
          name: response.data.name,
          text: response.data.body,
        };

        setComments([newComment, ...comments]);
        setName("");
        setComment("");
      })
      .catch((error) => console.error("Error posting comment:", error));
    };

  return (
    <section
      className={`rounded-2xl border p-6 shadow-sm ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800"
          : "border-gray-200 bg-white"
      }`}
    >
      <h3
        className={`mb-4 text-xl font-bold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Comments
      </h3>

      <CommentForm
        name={name}
        comment={comment}
        setName={setName}
        setComment={setComment}
        handleSubmit={handleSubmit}
      />

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((c, index) => (
            <div
              key={index}
              className={`rounded-lg border p-4 ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <p
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {c.name}
              </p>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-700"}
              >
                {c.text}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CommentSection;