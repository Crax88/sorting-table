import React, { useState } from "react";
import style from "./app.module.css";
import SelectedItem from "./components/SelectedItem/SelectedItem";
import ButtonBlock from "./components/ButtonBlock/ButtonBlock";
import Table from "./components/Table/Table";
import Paginator from "./components/Common/Paginator/Paginator";
import SearchBar from "./components/SearchBar/SearchBar";
import AddForm from "./components/AddForm/AddForm";

const App = props => {
  const [formOpen, openHandler] = useState(false);

  return (
    <div className={style.wrapper}>
      <SearchBar />
      <Table openHandler={openHandler} />
      <Paginator />
      <SelectedItem />
      {formOpen && <AddForm openHandler={openHandler} />}
      <p>Please click a button to get data.</p>
      <ButtonBlock />
    </div>
  );
};
export default App;
