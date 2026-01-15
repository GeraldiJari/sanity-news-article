import NewsCard from "./NewsCard";

export default function NewsRail({ articles, onSelect }) {
  return (
    <div
      className="
        flex
        gap-6
        overflow-x-auto
        py-34
        pb-4
        custom-scroll-x
        snap-x snap-mandatory
      "
    >
      {articles.map((a) => (
        <div key={a.id} className="snap-start">
            <NewsCard
            key={a.id}
            article={a}
            onClick={() => onSelect(a)}
            />
        </div>
      ))}
    </div>
  );
}
