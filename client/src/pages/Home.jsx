import { useEffect, useState } from "react";
import { getArticles } from "../api/article.api";
// import Sidebar from "../components/Sidebar";
import NewsHero from "../components/NewsHero";
import NewsRail from "../components/NewsRail";

export default function Home() {
  const [featured, setFeatured] = useState(null);
  const [others, setOthers] = useState([]);

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

  if (!featured) return null;

  return (
<section className="relative">
  {/* Yellow accent */}
  <div className="absolute left-16 lg:left-56 top-0 h-full w-16 bg-yellow-400" />

  <div className="relative max-w-6xl mx-auto px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
      <NewsHero article={featured} />
      <NewsRail articles={others} onSelect={swapFeatured} />
    </div>
  </div>
</section>

  );
}
