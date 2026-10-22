import css from "./User.module.css";

interface UserProps {
  name: string;
  lastName: string;
  age: number;
}

const User = ({ name, lastName, age }: UserProps) => {
  return (
    <div className={css["user"]}>
      <p>FirstName: {name}</p>
      <p>LastName: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default User;
