import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NewsHero({ article, onClickPrev }) {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(t);
  }, [article.id]);

  return (
    <div className="relative flex items-center gap-4">
      {/* BLUR PREVIEW LEFT */}
      {onClickPrev && (
        <div
          onClick={onClickPrev}
          className="
            w-40 h-40
            rounded-xl overflow-hidden
            opacity-40 blur-[1px]
            cursor-pointer
            transition hover:opacity-70 hover:blur-0
          "
        >
          <img
            src={article.cover_image || "/Image/expcard.jpg"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* MAIN HERO */}
      <div
        onClick={() => navigate(`/articles/${article.slug}`)}
        className={`
          relative w-120 h-60
          rounded-2xl overflow-hidden
          cursor-pointer group shadow-xl
          transition-all duration-500 ease-out
          ${animate ? "translate-x-6 opacity-0" : "translate-x-0 opacity-100"}
        `}
      >
        <img
          src={article.cover_image || "/Image/expcard.jpg"}
          className="w-full h-full object-cover transition group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
          <h2 className="text-lg font-semibold">
            {article.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
