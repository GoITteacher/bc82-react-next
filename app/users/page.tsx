import UserNavigation from "@/components/users/UserNavigation/UserNavigation";
import css from "./Page.module.css";
import UserList from "@/components/users/UserList/UserList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <UserNavigation />

      <UserList />
    </div>
  );
};

export default Page;
