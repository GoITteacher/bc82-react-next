import { getLessons } from "@/services/lessonService";
import css from "./Page.module.css";

const Page = async () => {
  const res = await getLessons();

  return (
    <div className={css["page"]}>
      <ul>
        {res.items.map((el) => {
          return <li key={el._id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
