/**
 * Перелічення (enum) та літеральні об'єднання.
 *
 * План:
 * - Коли обрати union замість enum, а коли enum корисний.
 * - Строкові vs числові enum-и, автонумерація.
 * - Підказки й захист від опечаток завдяки літералам.
 * - Завдання: оголосити статуси, коди відповіді та ролі користувача.
 */

//!======================================================
// union vs enum:
// union простіший і не генерує додатковий код;
// enum додає рантайм-об'єкт і зручний, коли потрібні посилання в JS-коді.

// type Role = "Admin" | "Teacher" | "Student";

// interface User {
//   name: string;
//   role: Role;
// }

// const user: User = {
//   name: "Vasya",
//   role: "Student",
// };

// function showInfo(user: User) {
//   if (user.role === "Admin") {
//     console.log("This is Admin");
//   }

//   if (user.role === "Student") {
//     console.log("This is student");
//   }

//   if (user.role === "Teacher") {
//     console.log("This is teacher");
//   }
// }

// function isAdmin(user: User) {
//   return user.role === "admin";
// }

//!=========================================
// enum Role {
//   Admin = "Admin",
//   Teacher = "Teacher",
//   Student = "Student",
// }

// interface User {
//   name: string;
//   role: Role;
// }

// const user: User = {
//   name: "Vasya",
//   role: Role.Student,
// };

// function showInfo(user: User) {
//   if (user.role === Role.Admin) {
//     console.log("This is Admin");
//   }

//   if (user.role === Role.Student) {
//     console.log("This is student");
//   }

//   if (user.role === Role.Teacher) {
//     console.log("This is teacher");
//   }
// }

// function isAdmin(user: User) {
//   return user.role === Role.Admin;
// }

// console.log(Role);

//!======================================================
// string vs number enums: рядкові уникють зворотного мапінгу; числові можуть автонумерувати, але вимагають обережності.

// type ServerResponse = 200 | 201 | 400 | 404 | 429 | 409 | 500;

// enum ServerResponse {
//   Success = 200,
//   CreatedElement = 201,
//   UserError = 400,
//   NotFound = 404,
//   NotAuthorized = 401,
//   InvalidCredentials = 409,
//   ServerError = 500,
// }

// const serverCodes = Object.values(ServerResponse);
// console.log(serverCodes);

// function checkServerResponse(response: ServerResponse) {
//   if (response === ServerResponse.Success) {
//   } else if (response === ServerResponse.CreatedElement) {
//   } else if (response === ServerResponse.UserError) {
//   } else if (response === ServerResponse.NotFound) {
//   } else if (response === ServerResponse.NotAuthorized) {
//   } else if (response === ServerResponse.InvalidCredentials) {
//   } else if (response === ServerResponse.ServerError) {
//   }
// }

//!=========================================

// type Role = "admin" | "student" | "teacher";

// enum ServerResponse {
//   Success = 200,
//   UserError = 400,
//   ServerError = 500,
// }

//!======================================================
// підказки: літеральні типи дають автокомпліт і перевірку значень;
//  enum робить те саме, але через властивості об'єкта.
//!======================================================

// let x:ServerResponse;

// if(x === ServerResponse.UserError){}
//!======================================================
/* 🧩 Task 1 — статуси запиту
 * Заміни any на літеральний union або enum зі значеннями pending/fulfilled/rejected.
 */

type Status = "pending" | "fulfilled" | "rejected";
export const requestStatus: Status = "pending";

/* 🧩 Task 2 — коди відповіді
 * Опиши або union чисел, або enum з кодами 200/201/400/500.
 * Зараз тип надто широкий.
 */

// enum ServerResponse {
//   Test = "awdawd",
//   Success = 200,
//   UserError = 400,
//   ServerError = 500,
// }

// console.log(ServerResponse);

// export const requestCode: ServerResponse = ServerResponse.Success;

/* 🧩 Task 3 — ролі користувача
 * Створи ролі admin/user/guest через union чи enum.
 * Типізуй поле role у користувача.
 */

export type Role = "admin" | "user" | "guest";

export interface User {
  username: string;
  role: Role;
}

export const currentUser: User = {
  username: "jacob",
  role: "admin",
};
