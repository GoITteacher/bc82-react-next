import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cars/all">Cars</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
