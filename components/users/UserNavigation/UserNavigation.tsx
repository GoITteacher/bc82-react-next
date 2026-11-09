import Link from "next/link";
import css from "./UserNavigation.module.css";

const UserNavigation = () => {
  return (
    <div className={css["userNavigation"]}>
      <Link href="/users">All Users</Link>
      <Link href="/users/online">Online Users</Link>
      <Link href="/users/offline">Offline Users</Link>
    </div>
  );
};

export default UserNavigation;
