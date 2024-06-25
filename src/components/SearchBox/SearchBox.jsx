import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  const id = useId();

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.search}
        id={id}
        type="text"
        value={value}
        onChange={(evt) => {
          onSearch(evt.target.value);
        }}
      />
    </div>
  );
}
