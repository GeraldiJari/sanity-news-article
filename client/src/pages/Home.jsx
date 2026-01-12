import { useEffect, useState } from "react";
import { getArticles } from "../api/article.api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => setArticles(res.data));
  }, []);

  return (
    <>
    <Navbar />

    <div>
      <h1>Articles</h1>
      {articles.map((a) => (
        <div key={a.id}>
          <Link to={`/articles/${a.slug}`}>
            <h3>{a.title}</h3>
          </Link>
          <p>{a.excerpt}</p>
        </div>
      ))}
    </div>
    </>
  );
  
}
