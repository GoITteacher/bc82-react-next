/**
 * Типізація об'єктів: interface та type, опціональні й readonly поля, вкладені структури.
 *
 * План уроку:
 * - Розбір різниці між interface та type (коли що використовувати).
 * - Приклади опціональних полів та readonly для захисту структури.
 * - Вкладені об'єкти: як задавати типи для address, metadata тощо.
 * - Коротке завдання: описати користувача з адресою і ролями.
 */
//!======================================================
// interface vs type: interface для форм об'єктів і підтримує declaration merging; type універсальний (об'єкти, union, intersection), але не мерджиться.

// number boolean string User Car UserRole UserAge

// type UserAge = string | number | null;
// type UserRole = 'admin' | 'student' | 'teacher'

// interface User {
//   firstName: string;
//   lastName: string;
//   city: string;
//   age: number;
//   isAdmin: boolean;
// }

// interface User{
//   phoneNumber: string
// }

// const user1: User = {
//   firstName: "Vasya",
//   lastName: "Klopotenko",
//   city: "Dnipro",
//   age: 25,
//   isAdmin: true,
// };
// const user2: User = {
//   firstName: "Vasya",
//   lastName: "Klopotenko",
//   city: "Dnipro",
//   age: 25,
//   isAdmin: true,
// };
// const user3: User = {
//   firstName: "Vasya",
//   lastName: "Klopotenko",
//   city: "Dnipro",
//   age: 25,
//   isAdmin: true,
// };

//!======================================================
// optional та readonly: поле з ? може бути відсутнє; readonly захищає значення після створення (ідентифікатори, константні властивості).

// interface Options {
//   allowNotification?: boolean;
//   theme?: string;
//   readonly isPremium?: boolean;
// }

// const opt: Options = {
//   allowNotification: true,
//   theme: "dark",
//   isPremium: true,
// };

// opt.allowNotification = false;
// opt.theme = 'light';
// opt.isPremium = false;

//!=========================================

// interface Item {
//   readonly _id: string;
//   title: string;
//   price: number;
// }

//!======================================================
// вкладені об'єкти: описуйте вкладені структури окремими типами (наприклад, Address, Metadata) і використовуйте їх усередині більших сутностей.

// interface Address {
//   city: string;
//   country: string;
// }

// interface User {
//   firstName: string;
//   lastName: string;
//   address: Address;
// }

// const user: User = {
//   firstName: "awdawd",
//   lastName: "Klopotenko",
//   address: {
//     city: "Dnipro",
//     country: "Ukraine",
//   },
// };

// const address: Address = {};

//!======================================================
// завдання: створити тип користувача з address і roles, де id readonly, email опційний, а roles — масив літералів.

//!======================================================

//!======================================================
/* 🧩 Task 1 — interface
 * Опиши адресу та користувача з опціональним email і readonly id.
 * Зараз усе типізовано як unknown/any — заміни на точні типи.
 */

// interface Address {
//   city: string;
//   street: string;
// }

// interface User {
//   readonly id: number;
//   name: string;
//   address: Address;
//   email?: string;
// }

// export const vasyl: User = {
//   id: 1,
//   name: "Vasyl",
//   address: {
//     city: "Lviv",
//     street: "Shevchenka 10",
//   },
// };

//!=========================================

/* 🧩 Task 2 — type + об'єднання
 * Опиши контакт і співробітника, додай літеральні ролі та позиції.
 * Поки що position і contact мають нечіткі типи.
 */
// interface Contact {
//   phone: string;
// }

// interface Address {
//   city: string;
//   street: string;
// }

// interface User {
//   readonly id: number;
//   name: string;
//   email: string;
//   position: string;
//   isActive: boolean;
//   address: Address;
//   contact: Contact;
// }

// export const olena: User = {
//   id: 2,
//   name: "Olena",
//   email: "olena@example.com",
//   position: "mentor",
//   isActive: true,
//   address: {
//     city: "Kyiv",
//     street: "Khreshchatyk 1",
//   },
//   contact: {
//     phone: "+380991234567",
//   },
// };

//!=========================================
/* 🧩 Task 3 — опціональні поля
 * Типізуй функцію так, щоб доступ до contact.phone не вимагав кастів.
 */

interface Contact {
  phone?: string;
}

interface Address {
  city: string;
  street: string;
}

interface User {
  readonly id: number;
  name: string;
  email: string;
  position: string;
  isActive: boolean;
  address: Address;
  contact: Contact;
}

export function printContact(user: User) {
  const contact = user.contact?.phone ?? "no phone";
  console.log(`${user.name}: ${contact}`);
}
