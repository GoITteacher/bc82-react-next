/**
 * Прості типи в TypeScript описують значення без внутрішньої структури.
 *
 * Структура заняття:
 * 1) Коротко про цінність явної типізації.
 * 2) Демонстрація: any, number, string, boolean, null, undefined.
 * 3) Інференція типів: як TS сам розуміє типи змінних.
 */

//!=========================================

// number, string, boolean, null, undefined

// let userName: string = "Vasya";
// userName = "Hello";
// userName = "World";
// userName = 25;
// console.log(userName);

// const x: number = 25;
// const phoneNumber: string = "+380912323523";
// const city: string = "Dnipro";
// const isAdmin: boolean = false;

// const x: any = true;

// any vs конкретні примітиви: any вимикає перевірки; number/string/boolean/undefined/null дають передбачуваність і підказки.
//!======================================================

// інференція: TS виводить тип з присвоєння (const x = 10 => number), але явна анотація потрібна, коли інференція двозначна.

// let x = 10;
// x = 'Hello world';

// const x = 10;
// const y = 25;
// let city = "Dnipro";

// console.log(city);
// debugger;

// let x: string;
// x = "Hello";
// console.log(x);

//!======================================================
// null/undefined: позначають відсутність значення; часто комбінують через union з основним типом.
//!======================================================

// let x: string | null = null;
// let y: number | null = null;

// x = "Hello";
// y = 25;

//!======================================================
/* 🧩 Task 1 — типи змінних
 * Додай явні примітивні типи замість unknown/any.
 */
export let userName: string = "Olena";
export const isOnline: boolean = true;
export let clicks: number = 0;

/* 🧩 Task 2 — інференція
 * Дай TS самостійно вивести типи, а потім спробуй порушити типобезпеку.
 */
// export const basePrice = 100;
// export const totalPrice = basePrice + " UAH"; // <- виправ типізацію

/* 🧩 Task 3 — union для відсутності значення
 * Обмеж те, що може бути null чи undefined, без any.
 */

// export let optionalScore: number | null = null; // 10, 20
// export let promoCode: string | undefined = undefined;
