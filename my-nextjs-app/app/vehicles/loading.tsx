// app/blog/loading.tsx

// This loading component is shown while the blog page data is being fetched
// It provides a skeleton UI that matches the layout of the actual blog page
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Animated loading skeleton for the page title */}
      <div className="h-28 w-28 bg-gray-200 rounded mb-6 animate-pulse" />
    </div>
  );
}
