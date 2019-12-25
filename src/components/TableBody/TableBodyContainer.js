import React from "react";
import { connect } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import TableBody from "./TableBody";
import { setSelectedItem } from "../../store/dataReducer";

const TableBodyContainer = ({
  data,
  currentPage,
  pageSize,
  setSelectedItem,
  isFetching
}) => {
  data = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return isFetching ? (
    <Preloader />
  ) : (
    <TableBody data={data} selectItem={setSelectedItem} />
  );
};

const mapStateToProps = state => ({
  data: state.data.data,
  currentPage: state.data.currentPage,
  pageSize: state.data.pageSize,
  isFetching: state.data.isFetching
});
export default connect(mapStateToProps, { setSelectedItem })(
  TableBodyContainer
);
