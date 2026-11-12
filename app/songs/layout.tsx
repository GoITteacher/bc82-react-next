import css from "./Layout.module.css";
import SongsSidebar from "@/components/SongsSidebar/SongsSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css.layout}>
      <SongsSidebar />
      {children}
    </div>
  );
};

export default Layout;
