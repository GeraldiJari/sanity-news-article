export default function NewsCard({ article, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        w-[220px]
        cursor-pointer
        rounded-xl
        overflow-hidden
        bg-neutral-800
        hover:shadow-xl
        transition
        flex-shrink-0
      "
    >
      <img
        src={article.cover_image || "/Image/expcard.jpg"}
        className="w-full object-cover"
      />

      <div className="p-4">
        <div className="font-semibold leading-snug text-s">
          {article.title}
        </div>
      </div>
    </div>
  );
}
