import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import style from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt="spinner" />
    </div>
  );
};

export default Preloader;
