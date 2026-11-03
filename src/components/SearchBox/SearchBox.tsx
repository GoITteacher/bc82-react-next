import css from "./SearchBox.module.css";

interface SearchBoxProps {
  query: string;
  setQuery: (v: string) => void;
}

export default function SearchBox({ query, setQuery }: SearchBoxProps) {
  return (
    <div>
      <input
        type="text"
        className={css.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
