// app/vehicles/page.tsx

// This is a Server Component (default in Next.js 15)
// Instead of useEffect, we can fetch data directly in our component!
import { getVehicles } from "@/app/lib/data";
import Card from "@/app/ui/components/card";
import Link from "next/link";
import Image from "next/image";

// Notice we can use 'async' directly on the component
// This means: wait for the data before sending HTML to the browser

export default async function VehiclePage() {
  const vehicles = await getVehicles();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Vehicles</h1>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <Card
            key={vehicle.id}
            title={vehicle.make}
            className="hover:border-blue-500 transition-colors"
          >
            <Image
              src={vehicle.image}
              width={600}
              height={400}
              alt="Picture of the vehicle"
            ></Image>
            <p className="text-gray-600 mb-4">{vehicle.model}</p>
            <p className="text-gray-600 mb-4">{vehicle.year}</p>
            <p className="text-gray-600 mb-4">{vehicle.price}</p>
            <p className="text-gray-600 mb-4">{vehicle.description}</p>
            <Link
              href={`/vehicles/${vehicle.id}`}
              className="text-blue-500 hover:text-blue-600"
            >
              Read more →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
