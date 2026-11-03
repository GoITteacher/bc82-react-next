import { useTasks } from "../../hooks/useTasks";
import css from "./ShortTaskList.module.css";

const ShortTaskList = () => {
  const tasks = useTasks("");

  return <div className={css["shortTaskList"]}></div>;
};

export default ShortTaskList;
