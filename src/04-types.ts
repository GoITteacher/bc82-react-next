/**
 * Власні типи: об'єднання (union), літеральні типи, перевірки типів (type guards).
 *
 * Що показати:
 * - Приклади union: number | string для ідентифікаторів.
 * - Літеральні типи: фіксовані статуси чи ролі.
 * - Type guards: перевірка typeof/символи in для звуження типу.
 *
 */
//!======================================================
// union: дозволяє кілька варіантів типу (number | string) без any.

// type UserAge = string | number;
// const age: UserAge = "25";

// type PhoneNumber = string | null;
// const phoneNumber: PhoneNumber = null;

//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.

// type InsertPosition = "afterbegin" | "beforebegin" | "afterend" | "beforeend";

// type UserRole = "student" | "admin" | "teacher";

// interface User {
//   firstName: string;
//   lastName: string;
//   role: UserRole;
// }

// const user: User = {
//   firstName: "Vasya",
//   lastName: "Vasylenko",
//   role: "admin",
// };
//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.

// function foo(userAge: string | number) {
//   if (typeof userAge === "string") {
//     userAge.toUpperCase();
//   } else {
//     console.log;
//   }
// }
// foo("25");

// function foo(value: number[] | number) {
//   if (Array.isArray(value)) {
//     value.pop();
//   } else {
//     value.toFixed();
//   }
// }

// interface Student {
//   firstName: string;
//   lastName: string;
//   phoneNumber?: string;
//   role: "student";
// }

// interface Teacher {
//   firstName: string;
//   lastName: string;
//   phoneNumber?: string;
//   role: "teacher";
//   salary: number;
// }

// type User = Student | Teacher;

// function showUserInfo(user: User) {
//   console.log(user.firstName);
//   console.log(user.lastName);

//   if (user.role === "teacher") {
//     console.log(user.salary);
//   }
// }

//!======================================================

//!======================================================
/* 🧩 Task 1 — ідентифікатор
 * Заміни any на union number|string і відформатуй для обох випадків.
 */
export type Identifier = any;
export const formatId = (id: Identifier) => {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
};

/* 🧩 Task 2 — статуси замовлення
 * Опиши літеральні статуси, щоб заборонити довільні рядки.
 */
export type OrderStatus = string;
export const nextStatus = (status: OrderStatus): OrderStatus => {
  if (status === "pending") return "shipped";
  return "done";
};
