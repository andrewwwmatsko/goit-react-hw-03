import { useId } from "react";

import css from "./SearchBox.module.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchBox({ value, onSearch }) {
  const id = useId();

  const handleClearInput = (evt) => {
    const clearedValue = (evt.currentTarget.previousElementSibling.value = "");
    onSearch(clearedValue);
  };

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <div className={css.inputWrapper}>
        <input
          className={css.search}
          id={id}
          type="text"
          value={value}
          onChange={(evt) => {
            onSearch(evt.target.value.trim());
          }}
        />
        <button
          className={css.closeBtn}
          type="button"
          onClick={handleClearInput}
        >
          <AiOutlineCloseCircle size={16} />
        </button>
      </div>
    </div>
  );
}
