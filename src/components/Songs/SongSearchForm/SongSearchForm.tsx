import css from "./SongSearchForm.module.css";

interface SongSearchForm {
  onSubmit: (artist: string) => void;
}

const SongSearchForm = ({ onSubmit }: SongSearchForm) => {
  const handleSubmit = (formData: FormData) => {
    const artist = formData.get("artist") as string;
    onSubmit(artist);
  };

  return (
    <form action={handleSubmit} className={css["songSearchForm"]}>
      <input type="text" placeholder="Ed Sheeran" name="artist" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SongSearchForm;
