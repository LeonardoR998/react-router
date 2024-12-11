import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post non trovato");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento del post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  if (!post) {
    return <div>Post non trovato</div>;
  }

  return (
    <div className="container py-5">
      <h1>{post.title}</h1>
      <img src={post.images} alt={post.title} style={{ maxWidth: "300px" }} />
      <p>{post.content}</p>
      <p>
        <strong>Tags:</strong> {post.tags.join(", ")}
      </p>
    </div>
  );
}
