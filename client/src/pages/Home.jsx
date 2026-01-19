import { useEffect, useState, useRef } from "react";
import { getArticles } from "../api/article.api";
import NewsHero from "../components/NewsHero";
import NewsRail from "../components/NewsRail";

export default function Home() {
  const [featured, setFeatured] = useState(null);
  const [others, setOthers] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    getArticles().then((res) => {
      setFeatured(res.data[0]);
      setOthers(res.data.slice(1));
    });
  }, []);

  const swapFeatured = (article) => {
    setOthers((prev) => [
      featured,
      ...prev.filter((a) => a.id !== article.id),
    ]);
    setFeatured(article);
  };

  const goNext = () => {
    if (others.length === 0) return;
    swapFeatured(others[0]);
  };

  // AUTO ROTATE
  useEffect(() => {
    if (!featured || others.length === 0) return;

    timerRef.current = setInterval(() => {
      goNext();
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, [featured, others]);

  if (!featured) return null;

  return (
    <div className="max-w-6xl mx-auto px-10 py-16">
      {/* META */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
        // Notices ·{" "}
        {new Date(featured.published_at).toISOString().slice(0, 10)}
      </p>

      <div className="text-xl font-bold -mb-20">
        {featured.title}
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-10 items-end">
        <NewsHero
          article={featured}
          onClickPrev={
            others.length
              ? () => swapFeatured(others[others.length - 1])
              : null
          }
        />

        <NewsRail
          articles={others}
          onSelect={swapFeatured}
        />
      </div>
    </div>
  );
}
