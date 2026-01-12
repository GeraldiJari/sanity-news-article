import { useEffect, useState } from "react";
import { getMyArticles } from "../api/article.api";
import { Link } from "react-router-dom";

export default function MyArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getMyArticles().then(res => setArticles(res.data));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>My Articles</h1>

      {articles.map(a => (
        <div key={a.id} style={{ marginBottom: 16 }}>
          <h3>{a.title}</h3>

          <p>
            Status:{" "}
            <strong>
              {a.is_published ? "Published" : "Draft"}
            </strong>
          </p>

          <Link to={`/articles/${a.slug}`}>
            View
          </Link>
          {" | "}
          <Link to={`/edit/${a.slug}`}>
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
}
