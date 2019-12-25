import React from "react";
import style from "./buttonBlock.module.css";
import { fetchData } from "../../store/dataReducer";
import { connect } from "react-redux";

const ButtonBlock = ({ fetchData }) => {
  return (
    <div className={style.btnWrapper}>
      <button onClick={() => fetchData("chunk")} className={style.btn}>
        Get Chunk
      </button>
      <button onClick={() => fetchData("all")} className={style.btn}>
        Get All
      </button>
    </div>
  );
};

export default connect(null, { fetchData })(ButtonBlock);
