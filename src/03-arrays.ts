/**
 * Типізація масивів: number[] чи Array<number>, підказки методів, масиви об'єктів і кортежі.
 *
 * Структура пояснення:
 * 1) Два синтаксиси типів масивів і коли який читабельніший.
 * 2) Як TS знає тип елементів у map/filter/find.
 * 3) Масиви об'єктів: окремий інтерфейс + список.
 * 4) Кортежі: фіксована кількість елементів різних типів.
 * 5) Міні-практика: типізувати список курсів та кортеж налаштувань.
 *
 */
//!======================================================
// синтаксис: number[] і Array<number> рівноцінні; обирайте читабельний для команди.

// const arr: number[] = [1, 2, true, 5, true, 7, 1, "awdawd", 5, 6, 1, 2];
// const arr2: string[] = ["Hello", "World", 25, true, null];
// const arr3: Array<number> = []

//!======================================================
// методи масивів: map/filter/find знають тип елементів і підказують параметри колбеків.

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

// const olena: User = {
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
// const vasyl: User = {
//   id: 3,
//   name: "Vasyl",
//   email: "vasyl@example.com",
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

// const users: User[] = [olena, vasyl];

// users.forEach((el) => {
//   console.log(el.name);
// });

// const numbers: number[] = [1, 2, 4, 5, 6, 1];

//!======================================================
// масиви об'єктів: краще описати окремий тип елемента й використовувати його для списку.

// interface Product {
//   title: string;
//   price: number;
// }

// const products: Product[] = [];

// products.push("123123");
// products.push(123123);

// products.push({ title: "Iphone", price: 1500 });

//!======================================================
// кортежі: фіксована кількість елементів різних типів, наприклад [string, number].

// type Color = [number, number, number, number?];
// const red: Color = [255, 0, 0];
// const green: Color = [0, 255, 0, 1];
// const blue: Color = [0, 0, 255, 1];
// const grey: Color = [100, 100, 100, 1];

//!======================================================

//!======================================================
/* 🧩 Task 1 — масив чисел
 * Заміни unknown на коректний тип масиву та виправ push/map.
 */
// export const points: number[] = [10, 20, 30];
// points.push("forty");
// const doubled = points.map(p => p * 2);

//!=========================================

/* 🧩 Task 2 — масив об'єктів
 * Типізуй список курсів, щоб title і lessons були підказуваними.
 */

interface Course {
  title: string;
  lessons: number;
}

export const courses: Course[] = [
  { title: "TS Basics", lessons: 12 },
  { title: "React", lessons: 18 },
];

const titles = courses.map((c) => c.title.toUpperCase());

//!=========================================

/* 🧩 Task 3 — кортеж налаштувань
 * Опиши фіксований набір значень: назва, лічильник, активність.
 */

type Settings = [string, number, boolean];
export const settings: Settings = ["autosave", 3, true];

settings[0] = "Hello world";
settings[1] = 25;
settings[2] = false;

settings.push("Hello world");
settings.push("Hello world");
settings.push("Hello world");
settings.push("Hello world");
settings.push("Hello world");
