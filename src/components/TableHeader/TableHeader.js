import React from "react";
import style from "./tableHeader.module.css";
import up from "../../assets/images/upArrow.png";
import down from "../../assets/images/downArrow.svg";
import { connect } from "react-redux";
import { setSortingBy, toggleSortingOrder } from "../../store/dataReducer";

const TableHeader = ({
  setSortingBy,
  toggleSortingOrder,
  ascending,
  sortBy
}) => {
  return (
    <thead>
      <tr>
        <th onClick={() => setSortingBy("id")} className={style.columnHeader}>
          id
          {sortBy === "id" && (
            <img
              onClick={() => toggleSortingOrder()}
              src={!ascending ? down : up}
              alt="arrow"
            />
          )}
        </th>
        <th
          onClick={() => setSortingBy("firstName")}
          className={style.columnHeader}
        >
          First name
          {sortBy === "firstName" && (
            <img
              onClick={() => toggleSortingOrder()}
              src={!ascending ? down : up}
              alt="arrow"
            />
          )}
        </th>
        <th
          onClick={() => setSortingBy("lastName")}
          className={style.columnHeader}
        >
          Last name
          {sortBy === "lastName" && (
            <img
              onClick={() => toggleSortingOrder()}
              src={!ascending ? down : up}
              alt="arrow"
            />
          )}
        </th>
        <th
          onClick={() => setSortingBy("email")}
          className={style.columnHeader}
        >
          Email
          {sortBy === "email" && (
            <img
              onClick={() => toggleSortingOrder()}
              src={!ascending ? down : up}
              alt="arrow"
            />
          )}
        </th>
        <th
          onClick={() => setSortingBy("phone")}
          className={style.columnHeader}
        >
          Phone
          {sortBy === "phone" && (
            <img src={!ascending ? down : up} alt="arrow" />
          )}
        </th>
      </tr>
    </thead>
  );
};
const mapStateToProps = state => {
  return {
    ascending: state.data.orderASC,
    sortBy: state.data.sortBy
  };
};

export default connect(mapStateToProps, { setSortingBy, toggleSortingOrder })(
  TableHeader
);
