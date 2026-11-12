import BackButton from "@/components/BackButton/BackButton";
import DeleteCarButton from "@/components/DeleteCarButton/DeleteCarButton";
import { getCarById } from "@/services/carService";
import Link from "next/link";

interface PageProps {
  params: Promise<{ carId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { carId } = await params;
  const car = await getCarById(carId);

  return (
    <div>
      <h1>Видалення авто</h1>
      <BackButton />
      <p>
        Ви дійсно бажаєте видалити інформацію про {car.model} {car.make}
      </p>

      <Link href={`/cars/${carId}`}>Скасувати</Link>
      <DeleteCarButton />
    </div>
  );
};

export default Page;
