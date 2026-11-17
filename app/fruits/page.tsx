import FruitsInfo from "@/components/FruitsInfo/FruitsInfo";
import css from "./page.module.css";
import FruitsController from "@/components/FruitsController/FruitsController";

const Page = () => {
  return (
    <div className={css["page"]}>
      <FruitsInfo />
      <FruitsController />
    </div>
  );
};

export default Page;
