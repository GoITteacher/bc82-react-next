import axios from "axios";
import type {
  GetTasksParams,
  NewTaskData,
  Task,
  TaskUpdateData,
} from "../types/task";

axios.defaults.baseURL =
  "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";

export const getTasks = async (params: GetTasksParams) => {
  const res = await axios.get<{ todos: Task[] }>("/todos", { params });
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete(`/todos/${taskId}`);
  return res.data;
};

export const addTask = async (taskData: NewTaskData) => {
  const res = await axios.post<Task>("/todos", taskData);
  return res.data;
};

export const updateTask = async (updatedTask: TaskUpdateData) => {
  const res = await axios.patch<Task>(`/todos/${updatedTask.id}`, updatedTask);
  return res.data;
};
