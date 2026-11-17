import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";
import css from "./page.module.css";
import TaskList from "@/components/TaskList/TaskList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Task Page</h1>
      <CreateTaskForm />
      <TaskList />
    </div>
  );
};

export default Page;
