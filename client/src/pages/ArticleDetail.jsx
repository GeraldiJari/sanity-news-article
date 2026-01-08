import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleBySlug } from "../api/article.api";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleBySlug(slug).then((res) => setArticle(res.data));
  }, [slug]);

  if (!article) return <p>Loading...</p>;

  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
