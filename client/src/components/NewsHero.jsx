import { useNavigate } from "react-router-dom";

export default function NewsHero({ article }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer group -pb-16"
      onClick={() => navigate(`/articles/${article.slug}`)}
    >
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
        // Notices ·{" "}
        {new Date(article.published_at).toISOString().slice(0, 10)}
      </p>

        <div className="cursor-pointer"> 
            <div className="text-3xl text-neutral-200 font-bold mb-4 max-w-xl">
                {article.title}
            </div>

            <div className="relative rounded-xl overflow-hidden">
                <img
                    src={article.cover_image || "/Image/expcard.jpg"}
                    className="w-full object-cover"
                />
            </div>
        </div>

    </div>
  );
}
