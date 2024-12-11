import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei post:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <div className="container py-5">
      <h1>Lista dei Post</h1>
      <ul>
        {posts.map((post) => (
          <li className="mb-5" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
