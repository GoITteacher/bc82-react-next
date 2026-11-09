import { server } from "./serverConfig";

interface Lesson {
  _id: string;
  title: string;
  subject: string;
  level: string;
  durationMinutes: number;
  teacher: string;
  publishedAt: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

interface GetLessonsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Lesson[];
}

export const getLessons = async () => {
  const res = await server.get<GetLessonsResponse>("/public/lessons");
  return res.data;
};
