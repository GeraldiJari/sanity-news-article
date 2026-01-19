import NewsCard from "./NewsCard";

export default function NewsRail({ articles, onSelect }) {
  return (
    <div
      className="
        flex gap-6
        overflow-x-auto
        py-34
        pb-6
        scroll-smooth
        custom-scroll-x
      "
    >
      {articles.map((a) => (
        <NewsCard
          key={a.id}
          article={a}
          onClick={() => onSelect(a)}
        />
      ))}
    </div>
  );
}
