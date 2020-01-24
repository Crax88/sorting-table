import React from "react";
import { connect } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import { setSelectedItem } from "../../store/dataReducer";
import style from "./table.module.css";

const searchData = (data, query, searchBy) => {
  return data.filter(el => {
    return el[searchBy]
      .toString()
      .toLowerCase()
      .includes(query);
  });
};

const Table = ({
  data,
  currentPage,
  pageSize,
  isFetching,
  setSelectedItem,
  selectedId,
  searchQuery,
  searchBy,
  error,
  openHandler
}) => {
  if (data) {
    data =
      searchQuery && searchQuery.length > 0
        ? searchData(data, searchQuery, searchBy)
        : data;
    data = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }

  return isFetching ? (
    <Preloader />
  ) : (
    <>
      <table className={style.table}>
        <TableHeader />
        <TableBody
          data={data}
          selectItem={setSelectedItem}
          selectedId={selectedId}
        />
      </table>
      {data.length ? (
        <button onClick={() => openHandler(true)} className={style.add_btn}>
          Add
        </button>
      ) : null}
      <h1>{error}</h1>
    </>
  );
};

const mapStateToProps = state => ({
  data: state.data.data,
  currentPage: state.data.currentPage,
  pageSize: state.data.pageSize,
  isFetching: state.data.isFetching,
  selectedId: state.data.selected ? state.data.selected.id : null,
  searchQuery: state.data.searchQuery,
  searchBy: state.data.searchBy,
  error: state.data.error
});
export default connect(mapStateToProps, { setSelectedItem })(Table);
