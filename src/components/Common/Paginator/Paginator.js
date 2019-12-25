import React from "react";
import { connect } from "react-redux";
import style from "./paginator.module.css";
import { setCurrentPage } from "../../../store/dataReducer";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";

const Paginator = ({ curPage, totalPages, setCurrentPage }) => {
  const startPage = curPage - 2 < 1 ? 1 : curPage - 2;

  const endPage =
    curPage === totalPages
      ? totalPages
      : curPage <= 5
      ? startPage + 4
      : curPage + 2;

  let pages = [];

  for (let i = startPage; i <= endPage; i++) {
    if (i <= totalPages) {
      pages.push(i);
    }
  }

  pages = pages.map(page => (
    <span
      key={page}
      onClick={() => setCurrentPage(page)}
      className={
        style.pageElem + " " + (page === curPage ? style.active : null)
      }
    >
      {page}
    </span>
  ));

  return !curPage ? null : (
    <div className={style.paginatorWrapper}>
      {curPage > 3 ? (
        <span onClick={() => setCurrentPage(1)} className={style.pageElem}>
          first
        </span>
      ) : null}
      {curPage !== 1 ? (
        <span
          onClick={() => setCurrentPage(curPage - 1)}
          className={style.pageElem}
        >
          <img src={leftArrow} alt="previous" />
        </span>
      ) : null}
      {pages}
      {curPage < totalPages ? (
        <span
          onClick={() => setCurrentPage(curPage + 1)}
          className={style.pageElem}
        >
          <img src={rightArrow} alt="next" />
        </span>
      ) : null}
      {curPage < totalPages ? (
        <span
          onClick={() => setCurrentPage(totalPages)}
          className={style.pageElem}
        >
          last
        </span>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  curPage: state.data.currentPage,
  totalPages: state.data.totalPages
});

export default connect(mapStateToProps, { setCurrentPage })(Paginator);
