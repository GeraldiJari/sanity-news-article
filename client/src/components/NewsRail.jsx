import NewsCard from "./NewsCard";

export default function NewsRail({ articles, onSelect }) {
  return (
    <div className="flex flex-col-2 gap-6 overflow-x-auto max-h-[40vh]">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          onClick={() => onSelect(article)}
        />
      ))}
    </div>
  );
}
