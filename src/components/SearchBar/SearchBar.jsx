import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <div className={s.container}>
      <header className={s.wrapper}>
        <form onSubmit={handleSubmit} className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.icon}></span>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
