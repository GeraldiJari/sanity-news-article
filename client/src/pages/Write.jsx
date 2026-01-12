import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../components/ArticleEditor";
import { createArticle } from "../api/article.api";

export default function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      const res = await createArticle({
        title,
        content,
        is_published: isPublished,
      });

      navigate(`/articles/${res.data.slug}`);
    } catch (e) {
      alert("Failed to publish article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>Write Article</h1>

      <input
        placeholder="Article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          fontSize: 24,
          marginBottom: 16,
        }}
      />

      <Editor content={content} onChange={setContent} />

      <div style={{ marginTop: 16 }}>
        <label>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          Publish immediately
        </label>
      </div>

      <button onClick={submit} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
