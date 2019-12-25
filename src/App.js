import React from "react";
import style from "./app.module.css";
import TableHeader from "./components/TableHeader/TableHeader";
import TableBodyContainer from "./components/TableBody/TableBodyContainer";
import SelectedItem from "./components/SelectedItem/SelectedItem";
import ButtonBlock from "./components/ButtonBlock/ButtonBlock";
import Paginator from "./components/Common/Paginator/Paginator";

const App = props => {
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <TableHeader />
        <TableBodyContainer />
      </table>
      <Paginator />
      <SelectedItem />
      <ButtonBlock />
    </div>
  );
};
export default App;
