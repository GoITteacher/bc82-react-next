import { getLessons } from "@/services/lessonService";
import css from "./CarList.module.css";

const CarList = async () => {
  const res = await getLessons();

  return (
    <div className={css["carList"]}>
      <button
        onClick={() => {
          console.log("Hello");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default CarList;
