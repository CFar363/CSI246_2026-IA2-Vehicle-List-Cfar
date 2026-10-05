// app/vehicles/[id]/page.tsx
import { getVehicle } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Entry from "@/app/ui/components/entry";
import Link from "next/link";

// Dynamic route page component for individual vehicle posts
// [id] in the folder name creates a dynamic route parameter
// params prop automatically receives the dynamic segment value from the URL
export default async function BlogPost({ params }: { params: { id: string } }) {
  // Extract the vehicle ID from the URL parameters
  const { id } = await params;

  // Fetch the vehicle post data using the ID
  // This is an async operation that waits for the data
  const vehicle = await getVehicle(id);
  console.log(vehicle);

  // If no vehicle is found, trigger Next.js's not-found page
  if (!vehicle) {
    console.log("No Vehicle");
    notFound();
  }

  // Render the vehicle with a responsive layout
  return (
    <article className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{vehicle.make}</h1>
      <div className="prose lg:prose-xl">Model: {vehicle.model}</div>
      <div className="prose lg:prose-xl">Year: {vehicle.year}</div>
      <div className="prose lg:prose-xl">Price: {vehicle.price}</div>
      <div className="prose lg:prose-xl">
        Features: {vehicle.features.join(", ")}
      </div>
      <h2 className="prose lg:prose-xl">Specs:</h2>
      <ul>
        <div className="prose lg:prose-xl">Engine: {vehicle.specs.engine}</div>
        <div className="prose lg:prose-xl">
          Exterior Color: {vehicle.specs.exteriorColor}
        </div>
        <div className="prose lg:prose-xl">Fuel: {vehicle.specs.fuelType}</div>
        <div className="prose lg:prose-xl">
          Interior Color: {vehicle.specs.interiorColor}
        </div>
        <div className="prose lg:prose-xl">Milage: {vehicle.specs.mileage}</div>
        <div className="prose lg:prose-xl">
          Transmission: {vehicle.specs.transmission}
        </div>
      </ul>
      <br />
      <Link href={`/vehicles`} className="text-blue-500 hover:text-blue-600">
        Back
      </Link>
      <br />
      <h2 className="text-2xl font-bold mb-3">Comments:</h2>
      {vehicle.comments.map((comment) => {
        return (
          <Entry
            key={comment.id}
            author={comment.author}
            text={comment.text}
            date={comment.date}
          ></Entry>
        );
      })}
      <br />
      <br />
      <h3 className="text-2xl font-bold mb-3">Add comment:</h3>
      <form name="comment form" action="" className={`rounded-lg border p-4`}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          required
          type="text"
          className={`rounded-lg border p-1`}
        />
        <br />
        <label htmlFor="comment">Comment: </label>
        <textarea
          id="comment"
          name="comment"
          required
          className={`rounded-lg border p-1`}
        ></textarea>
        <br />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          name="date"
          required
          className={`rounded-lg border p-1`}
        ></input>
        <br />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </article>
  );
}
