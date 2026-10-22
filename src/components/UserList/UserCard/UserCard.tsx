import { User } from "../../../types/users";
import css from "./UserCard.module.css";

interface UserCardProps {
  data: User;
}

const UserCard = ({ data }: UserCardProps) => {
  return (
    <div className={css["user-сard"]}>
      <p>
        {data.firstName} {data.lastName}
      </p>
      {data.isActive && <p>Зараз Онлайн</p>}
    </div>
  );
};

export default UserCard;
