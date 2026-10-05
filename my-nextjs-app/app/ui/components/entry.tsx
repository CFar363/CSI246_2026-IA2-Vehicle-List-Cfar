// app/ui/components/entry.tsx

// This is a reusable entry component that accepts:
// - author: The entry's author
// - text: review from author
// - date: date of review
// - className: Optional additional CSS classes for customization
export default function Entry({
  author,
  text,
  date,
  className = "",
}: {
  author: string;
  text: string;
  date: Date;
  className?: string;
  
}) {
  return (
    <div className={`rounded-lg border p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{author}</h2>
      {text}
      <h3>{date.toDateString()}</h3>
    </div>
  );
}
