import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "../../components/ArticleEditor";
import {
  getArticleForEdit,
  updateArticle,
  deleteArticle,
} from "../../api/article.api";

export default function EditArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    getArticleForEdit(slug)
      .then(res => {
        const a = res.data;
        setArticle(a);
        setTitle(a.title);
        setContent(a.content);
        setIsPublished(a.is_published);
      })
      .catch(() => navigate("/my-articles"));
  }, [slug]);

  const submit = async () => {
    const res = await updateArticle(article.id, {
        title,
        content,
        is_published: isPublished,
    });
        navigate(`/articles/${res.data.slug}`);
    };


  const remove = async () => {
    if (!confirm("Delete this article?")) return;
    await deleteArticle(article.id);
    navigate("/my-articles");
  };

  if (!article) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>Edit Article</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", fontSize: 24 }}
      />

      <Editor content={content} onChange={setContent} />

      <label>
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
        />
        Published
      </label>

      <div style={{ marginTop: 16 }}>
        <button onClick={submit}>Update</button>
        <button
          onClick={remove}
          style={{ marginLeft: 12, color: "red" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
