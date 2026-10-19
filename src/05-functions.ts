/**
 * Типізація функцій: параметри, тип результату, void, опціональні параметри та значення за замовчуванням.
 *
 * План блоку:
 * 1) Сигнатури функцій: параметри та повернення.
 * 2) void і never — коли застосовувати.
 * 3) Опціональні параметри та дефолти в сигнатурі.
 * 4) Стрілкові функції vs декларації: як описувати типи.
 *
 */
//!======================================================
// сигнатури: задаємо типи параметрів і повернення; TS виводить їх з тіла, але явна анотація робить контракт явним.

// function myFn(x1: number, x2: number): number {
//   return (x1 * x2).toString();
// }

// type MyType = [number, string, boolean];
// function getArray(): MyType {
//   const x: MyType = [1, "hello", true];
//   return x;
// }

//!=========================================

// type CalcFn = (x: number, y: number) => number;
// const sum: CalcFn = (x, y) => x + y;
// const mult: CalcFn = (x, y) => x * y;
// const dev: CalcFn = (x, y) => x / y;
// const diff: CalcFn = (x, y) => x - y;

//!======================================================
// void/never: void для "нічого не повертає", never для "не завершується" (кидає помилку або нескінченний цикл).

type Logger = (value: string) => void;

const sayHello: Logger = (value) => {
  console.log(value);
};

const parseError = (error: Error): never => {
  if (error.message === "401") {
    throw new Error("Користувач не авторизований");
  }

  if (error.message === "429") {
    throw new Error("Дуже багато запитів. Спробуйте зачекати");
  }

  throw new Error("Невідома помилка");
};

//!======================================================
// optional/дефолти: параметр? або значення за замовчуванням у сигнатурі; перевіряти на undefined усередині.
//!======================================================

// function foo(x: number = 1, y: number = 0) {
//   console.log(x + y);
// }

// foo(10, 10);

// function createColor(
//   red: number = 255,
//   green: number = 255,
//   blue: number = 255,
//   alpha: number = 1,
// ) {
//   const color = [red, green, blue, alpha];
//   return color;
// }

// createColor(15, 25, 30);

//!=========================================

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   city: string;
// }

// function showUser({ firstName, lastName, city, age }: User) {
//   console.log(firstName);
//   console.log(lastName);
//   console.log(age);
//   console.log(city);
// }

//!======================================================
/* 🧩 Task 1 — типізація аргументів
 * Додай точні типи замість any/unknown.
 */
// export function add(a, b) {
//   return a + b;
// }

/* 🧩 Task 2 — void функція
 * Опиши логер так, щоб він нічого не повертав і приймав рядок.
 */
// export const logMessage = (message) => {
//   console.log("[LOG]", message);
// };

/* 🧩 Task 3 — optional параметр
 * Типізуй title як опціональний, а role — літерально.
 */
// type UserRole = any;
// export function createUser(name, role, title) {
//   return { name, role, title: title ?? "Mr/Ms" };
// }

/* 🧩 Task 4 — never
 * Додай тип never для функції, що завжди кидає помилку.
 */
// export function fail(message) {
//   throw new Error(message);
// }
