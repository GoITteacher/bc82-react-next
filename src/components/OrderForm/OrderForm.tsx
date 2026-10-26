import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const id = useId();

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Hello submit");
  //   const borys = new FormData(e.currentTarget);

  //   const data = {
  //     name: borys.get("username") as string,
  //     email: borys.get("email") as string,
  //     delivery: borys.get("delivery") as string,
  //   };

  //   console.log(data);

  //   e.currentTarget.reset();
  // };

  const handleSubmit = (formData: FormData) => {
    const data = {
      name: formData.get("username") as string,
      email: formData.get("email") as string,
      delivery: formData.get("delivery") as string,
      password: formData.get("password") as string,
      balance: Number(formData.get("balance")),
      isAdmin: Boolean(formData.get("isAdmin")),
    };

    console.log(data);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`username-${id}`}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="username"
          id={`username-${id}`}
        />

        <label className={css.label} htmlFor={`email-${id}`}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={`email-${id}`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <fieldset>
        <input type="text" />
        <input type="password" />
        <input type="checkbox" name="isAdmin" />
        <input type="radio" />
        <input type="color" />
        <input type="date" />
        <input type="email" />
        <input type="phone" />
        <input type="number" />
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
