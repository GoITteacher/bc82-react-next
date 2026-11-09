import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <Link className={css["link"]} href="/">
        Home Page
      </Link>
      <Link className={css["link"]} href="/users">
        Users
      </Link>
      <Link className={css["link"]} href="/lessons">
        Lessons
      </Link>
      <Link className={css["link"]} href="/songs">
        Songs
      </Link>
      <Link className={css["link"]} href="/about-us">
        About Us
      </Link>
    </header>
  );
};

export default Header;
