import React from "react";
import { connect } from "react-redux";
import style from "./selectedItem.module.css";

const SelectedItem = ({ selected }) => {
  return !selected ? null : (
    <div className={style.selectWrapper}>
      <span>
        Selected user: <b>{`${selected.firstName} ${selected.lastName}`}</b>
      </span>
      <div className={style.location}>
        <span>
          Address: <b>{selected.address.streetAddress}</b>
        </span>
        <span>
          City: <b>{selected.address.city}</b>
        </span>
        <span>
          State: <b>{selected.address.state}</b>
        </span>
        <span>
          Zipcode: <b>{selected.address.zip}</b>
        </span>
      </div>
      <div className={style.description}>
        <span>Description: </span>
        <textarea
          cols="30"
          rows="5"
          value={selected.description}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selected: state.data.selected
  };
};

export default connect(mapStateToProps)(SelectedItem);
