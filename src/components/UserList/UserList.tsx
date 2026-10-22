import { User } from "../../types/users";
import UserCard from "./UserCard/UserCard";
import css from "./UserList.module.css";

const users: User[] = [
  {
    id: 1,
    firstName: "Олександр",
    lastName: "Коваленко",
    email: "oleksandr.kovalenko@example.com",
    age: 28,
    role: "admin",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=11",
    createdAt: "2026-01-15T10:30:00Z",
  },
  {
    id: 2,
    firstName: "Марія",
    lastName: "Шевченко",
    email: "maria.shevchenko@example.com",
    age: 24,
    role: "user",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=5",
    createdAt: "2026-02-03T14:20:00Z",
  },
  {
    id: 3,
    firstName: "Андрій",
    lastName: "Мельник",
    email: "andrii.melnyk@example.com",
    age: 32,
    role: "moderator",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=12",
    createdAt: "2026-02-18T09:15:00Z",
  },
  {
    id: 4,
    firstName: "Анна",
    lastName: "Бондаренко",
    email: "anna.bondarenko@example.com",
    age: 22,
    role: "user",
    isActive: false,
    avatar: "https://i.pravatar.cc/150?img=9",
    createdAt: "2026-03-05T16:45:00Z",
  },
  {
    id: 5,
    firstName: "Дмитро",
    lastName: "Ткаченко",
    email: "dmytro.tkachenko@example.com",
    age: 35,
    role: "user",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=13",
    createdAt: "2026-03-22T11:10:00Z",
  },
  {
    id: 6,
    firstName: "Софія",
    lastName: "Кравченко",
    email: "sofia.kravchenko@example.com",
    age: 26,
    role: "moderator",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=10",
    createdAt: "2026-04-07T08:30:00Z",
  },
  {
    id: 7,
    firstName: "Максим",
    lastName: "Олійник",
    email: "maksym.oliinyk@example.com",
    age: 29,
    role: "user",
    isActive: false,
    avatar: "https://i.pravatar.cc/150?img=14",
    createdAt: "2026-04-19T13:55:00Z",
  },
  {
    id: 8,
    firstName: "Катерина",
    lastName: "Мороз",
    email: "kateryna.moroz@example.com",
    age: 31,
    role: "admin",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=16",
    createdAt: "2026-05-02T12:00:00Z",
  },
  {
    id: 9,
    firstName: "Владислав",
    lastName: "Романюк",
    email: "vladyslav.romaniuk@example.com",
    age: 27,
    role: "user",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=15",
    createdAt: "2026-05-16T17:25:00Z",
  },
  {
    id: 10,
    firstName: "Юлія",
    lastName: "Петренко",
    email: "yuliia.petrenko@example.com",
    age: 23,
    role: "user",
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=20",
    createdAt: "2026-06-01T10:40:00Z",
  },
];

const UserList = () => {
  return (
    <ul className={css["userList"]}>
      {users.map((user) => {
        return <UserCard data={user} />;
      })}
    </ul>
  );
};

export default UserList;
