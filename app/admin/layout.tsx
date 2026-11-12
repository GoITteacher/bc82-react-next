import Link from "next/link";
import css from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css["layout"]}>
      <div>
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/create-car">Create Car</Link>
        <Link href="/admin/create-song">Create Song</Link>
      </div>

      {children}
    </div>
  );
};

export default Layout;
