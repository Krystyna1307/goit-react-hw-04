import React from "react";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    onSubmit(values.query);
  };

  return (
    <div className={s.container}>
      <header className={s.wrapper}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field
              name="query"
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
