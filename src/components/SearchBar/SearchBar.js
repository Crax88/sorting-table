import React, { useState } from "react";
import style from "./searchbar.module.css";
import { connect } from "react-redux";
import { setSearchQuery } from "../../store/dataReducer";

const SearchBar = ({ setSearchQuery }) => {
  const [text, setText] = useState("");
  const [prop, setProp] = useState("id");
  const submitHandler = e => {
    e.preventDefault();
    setSearchQuery(text.toLocaleLowerCase(), prop);
    setText("");
  };
  return (
    <form className={style.form} onSubmit={e => submitHandler(e)}>
      <span htmlFor="search">Search</span>
      <input
        id="search"
        type="text"
        className={style.input}
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <span htmlFor="by">By</span>
      <select
        id="by"
        className={style.select}
        onChange={e => setProp(e.target.value)}
      >
        <option value="id">ID</option>
        <option value="firstName">First name</option>
        <option value="lastName">Last Name</option>
        <option value="email">email</option>
      </select>
      <input type="submit" value="Search" className={style.btn} />
    </form>
  );
};

export default connect(null, { setSearchQuery })(SearchBar);
