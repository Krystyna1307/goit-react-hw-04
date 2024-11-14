import React from "react";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = () => {
  return (
    <div>
      <header className={s.wrapper}>
        <Formik>
          <Form>
            <Field
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;
