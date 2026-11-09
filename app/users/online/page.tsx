import UserNavigation from "@/components/users/UserNavigation/UserNavigation";
import css from "./Page.module.css";
import OnlineUsers from "@/components/users/OnlineUsers/OnlineUsers";

const Page = () => {
  return (
    <div className={css["page"]}>
      <UserNavigation />
      <OnlineUsers />
    </div>
  );
};

export default Page;
