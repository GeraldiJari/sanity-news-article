import { useEffect, useState } from "react";
import { getMyArticles } from "../../api/article.api";
import { Link } from "react-router-dom";

export default function MyArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getMyArticles().then(res => setArticles(res.data));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>My Articles</h1>

      {/* {articles.map(a => (
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
      ))} */}

      {articles.length === 0 && (
          <p className="text-gray-500">
            You haven’t written any articles yet.
          </p>
        )}

        {articles.map(a => (
          <div
            key={a.id}
            className="border-b py-4"
          >
            <h3 className="text-lg font-semibold">
              {a.title}
            </h3>

            <p className="text-sm text-gray-500">
              {a.is_published ? "Published" : "Draft"}
            </p>

            <div className="text-sm mt-2 space-x-3">
              <Link
                to={`/articles/${a.slug}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
              <Link
                to={`/edit/${a.slug}`}
                className="text-gray-600 hover:underline"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}

    </div>
  );
}
