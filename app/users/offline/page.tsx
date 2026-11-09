import UserNavigation from "@/components/users/UserNavigation/UserNavigation";
import css from "./Page.module.css";
import OfflineUsers from "@/components/users/OfflineUsers/OfflineUsers";

const Page = () => {
  return (
    <div className={css["page"]}>
      <UserNavigation />
      <OfflineUsers />
    </div>
  );
};

export default Page;
