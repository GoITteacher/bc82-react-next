import BackButton from "@/components/BackButton/BackButton";
import { getCarById } from "@/services/carService";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ carId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { carId } = await params;
  const car = await getCarById(carId).catch((err) => {
    notFound();
  });

  return (
    <div>
      <h1>Car Details</h1>
      <BackButton />
      <p>
        {car.model} {car.make}
      </p>
      <p>{car.mileage}</p>
      <p>{car.price}</p>
      <p>{car.year}</p>

      <div>
        <Link href="/cars">Back to car list</Link>
        <Link href={`/cars/${carId}/update`}>Update Car</Link>
        <Link href={`/cars/${carId}/delete`}>Delete Car</Link>
      </div>
    </div>
  );
};

export default Page;
