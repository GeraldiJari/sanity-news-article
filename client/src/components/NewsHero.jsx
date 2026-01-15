import { useNavigate } from "react-router-dom";

export default function NewsHero({ article }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer group"
      onClick={() => navigate(`/articles/${article.slug}`)}
    >
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
        // Notices ·{" "}
        {new Date(article.published_at).toISOString().slice(0, 10)}
      </p>

        <div className="cursor-pointer">
        <h1 className="text-3xl font-bold mb-4 max-w-xl">
            {article.title}
        </h1>

        <div className="relative rounded-xl overflow-hidden">
            <img
            src={article.cover_image || "/placeholder.jpg"}
            className="w-full h-[360px] object-cover"
            />
        </div>
        </div>

    </div>
  );
}
