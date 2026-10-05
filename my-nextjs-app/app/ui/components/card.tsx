// app/ui/components/card.tsx

// This is a reusable card component that accepts:
// - title: The card's header text
// - children: Any content to be displayed in the card body
// - className: Optional additional CSS classes for customization
export default function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
