import BlogPost from "./BlogPost";

function BlogList({ posts }) {
  return (
    <section className="space-y-6">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </section>
  );
}

export default BlogList;