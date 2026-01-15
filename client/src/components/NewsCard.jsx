export default function NewsCard({ article, onClick }) {
  return (
    <div
      onClick={onClick}
      className="min-w-70 h-50 cursor-pointer rounded-lg overflow-hidden border hover:shadow-lg transition"
    >
      <img
        src={article.cover_image || "/Image/expcard.jpg"}
        className="h-40 w-full"
      />

      <div className="p-4">
        <h3 className="font-semibold leading-snug">
          {article.title}
        </h3>
      </div>
    </div>
  );
}
