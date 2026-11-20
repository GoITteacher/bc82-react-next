import UpdateUserForm from "@/components/UpdateUserForm/UpdateUserForm";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <UpdateUserForm />
    </div>
  );
};

export default Page;
