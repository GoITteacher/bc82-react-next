export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
  category: string;
  tags: string[];
}

export interface NewTaskData {
  title: string;
  description?: string;
  completed?: boolean;
  priority?: string;
  category?: string;
  tags?: string[];
}

export interface TaskUpdateData {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: string;
  category?: string;
  tags?: string[];
}

export interface GetTasksParams {
  page?: number;
  perPage?: number;
  sortOrder?: "desc" | "asc";
  title?: string;
}
