import css from "./SearchForm.module.css";

interface SearchFormProps {
  callback: (value: string) => void;
}

export default function SearchForm({ callback }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const value = formData.get("value") as string;
    callback(value);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input className={css.input} type="text" name="value" />
      <button type="submit">Search</button>
    </form>
  );
}
