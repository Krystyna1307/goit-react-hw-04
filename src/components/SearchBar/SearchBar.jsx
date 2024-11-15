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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
