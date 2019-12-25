import { dataAPI } from "../api/api";

const SET_DATA = "SET_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SORTING_BY = "SET_SORTING_BY";
const SET_SORTING_ORDER = "SET_SORTING_ORDER";
const SORT_DATA = "SORT_DATA";

const initState = {
  data: [],
  selected: null,
  total: 0,
  isFetching: null,
  currentPage: null,
  totalPages: null,
  pageSize: 10,
  sortBy: null,
  orderASC: true
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: [...action.payload],
        total: action.payload.length,
        totalPages: Math.ceil(action.payload.length / state.pageSize),
        currentPage: 1
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.payload };
    }
    case SET_SELECTED_ITEM: {
      return {
        ...state,
        selected: state.data.filter(item => item.id === action.payload)[0]
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case SET_SORTING_BY: {
      return { ...state, sortBy: action.payload };
    }
    case SET_SORTING_ORDER: {
      return { ...state, orderASC: !state.orderASC };
    }
    case SORT_DATA: {
      return {
        ...state,
        data: [
          ...state.data.sort((a, b) => {
            if (state.orderASC) {
              return a[state.sortBy] > b[state.sortBy] ? 1 : -1;
            } else {
              return a[state.sortBy] > b[state.sortBy] ? -1 : 1;
            }
          })
        ]
      };
    }
    default:
      return state;
  }
};

const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching
});

const setData = data => ({ type: SET_DATA, payload: data });

export const setSelectedItem = id => ({ type: SET_SELECTED_ITEM, payload: id });

export const setSortingBy = prop => dispatch => {
  dispatch({ type: SET_SORTING_BY, payload: prop });
  dispatch({ type: SORT_DATA });
};
export const toggleSortingOrder = () => dispatch => {
  dispatch({ type: SET_SORTING_ORDER });
  dispatch({ type: SORT_DATA });
};
export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page
});

export const fetchData = size => dispatch => {
  dispatch(toggleIsFetching(true));
  const data = size === "chunk" ? dataAPI.getChunk() : dataAPI.getAll();
  data.then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setData(data));
  });
};

export default dataReducer;
