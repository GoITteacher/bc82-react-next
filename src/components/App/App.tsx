import TaskList from "../TaskList/TaskList";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import css from "./App.module.css";

import { useState } from "react";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";
import { useInit } from "../../hooks/useInit";
import { useCreateTask } from "../../hooks/useCreateTask";

export default function App() {
  const [query, setQuery] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal();
  const tasks = useTasks(query);
  const createTask = useCreateTask();

  useInit();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox query={query} setQuery={setQuery} />

        <SortFilter />
        <button onClick={openModal} className={css.createButton}>
          Create task
        </button>
      </header>

      <strong className={css.loading}>Loading tasks...</strong>
      <TaskList tasks={tasks} />

      {isOpenModal && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={createTask} />
        </Modal>
      )}
    </div>
  );
}
