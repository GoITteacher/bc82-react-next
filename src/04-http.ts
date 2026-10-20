// /**
//  * Типізація HTTP-запитів з Axios.
//  *
//  * План:
//  * - Generics у axios.get/post для типізації даних.
//  * - Опис контрактів відповіді (DTO) і вкладених полів.
//  * - Типізація запитів: params/body, коди відповіді.
//  * - Обробка помилок AxiosError (unknown -> звуження).
//  * - Завдання: прибрати any/unknown, додати контракти для постів.
//  */

// import axios, { AxiosError } from "axios";
// import type {
//   Book,
//   CreateBookBody,
//   GetBooksParams,
//   GetBooksResponse,
//   UpdateBookBody,
// } from "./types/books";
// //!======================================================
// // axios.get<T> повертає Promise<AxiosResponse<T>>; data матиме тип T.

// //!=========================================

// export const getBooks = async (params: GetBooksParams) => {
//   const res = await axios.get<GetBooksResponse>("/books", { params });
//   return res.data;
// };

// export const createBook = async (body: CreateBookBody) => {
//   try {
//     const res = await axios.post<Book>("/books", body);
//     return res.data;
//   } catch (err) {
//     if (axios.isAxiosError(err)) {
//       console.log(err.code);
//     }
//   }
// };

// export const getBookById = async (bookId: string) => {
//   const res = await axios.get<Book>(`/books/${bookId}`);
//   return res.data;
// };

// export const replaceBook = async (bookId: string, body: CreateBookBody) => {
//   const res = await axios.put<Book>(`/books/${bookId}`, body);
//   return res.data;
// };

// export const updateBook = async (bookId: string, body: UpdateBookBody) => {
//   const res = await axios.patch<Book>(`/books/${bookId}`, body);
//   return res.data;
// };

// export const deleteBookById = async (bookId: string) => {
//   const res = await axios.delete<null>(`/books/${bookId}`);
//   return res.data;
// };

// //!======================================================
// // DTO: описуємо структуру відповіді/запиту окремими типами, щоб не дублювати.
// //!======================================================
// // Помилки: catch отримує unknown; звужуємо через axios.isAxiosError.
// //!======================================================
// /* 🧩 Task 1 — модель поста
//  * Опиши Post з полями id/title/body/tags/reactions/views/userId.
//  */
// export type Post = any;

// /* 🧩 Task 2 — отримати всі пости
//  * Типізуй відповідь від dummyjson.com/posts (posts, total, skip, limit).
//  */
// export async function getAllPosts() {
//   const response = await axios.get("https://dummyjson.com/posts");
//   return response.data;
// }

// /* 🧩 Task 3 — отримати пост за id
//  * Додай тип для поста і параметра postId без any.
//  */
// export async function getPostById(postId): Promise<unknown> {
//   const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
//   return response.data;
// }

// /* 🧩 Task 4 — створити пост
//  * Типізуй тіло запиту (title/body/tags) та відповідь.
//  */
// export type NewPost = {
//   title: unknown;
//   body: unknown;
//   tags: unknown;
// };

// export async function createPost(newPost: NewPost): Promise<any> {
//   const response = await axios.post("https://dummyjson.com/posts/add", newPost);
//   return response.data;
// }

// /* 🧩 Task 5 — обгортка відповіді
//  * Узагальни HttpResponse<T>, прибери any і додай код статусу.
//  */
// export type HttpResponse<T> = {
//   data: any;
//   code: number;
// };

// export const samplePost: HttpResponse<Post> = {
//   data: {
//     id: 0,
//     title: "Sample",
//     body: "Replace types",
//     tags: [],
//     reactions: { likes: 0, dislikes: 0 },
//     views: 0,
//     userId: 0,
//   },
//   code: 200,
// };
