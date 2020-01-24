import { dataAPI } from "../api/api";

const SET_DATA = "SET_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SORTING_BY = "SET_SORTING_BY";
const SET_SORTING_ORDER = "SET_SORTING_ORDER";
const SORT_DATA = "SORT_DATA";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
const SET_ERROR = "SET_ERROR";
const ADD_NEW_DATA = "ADD_NEW_DATA";

const initState = {
  data: [],
  selected: null,
  total: 0,
  isFetching: null,
  currentPage: null,
  totalPages: null,
  pageSize: 30,
  sortBy: "",
  orderASC: true,
  searchQuery: null,
  searchBy: null,
  searched: null,
  error: null
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return { ...state, error: action.payload, isFetching: false };
    }
    case SET_DATA: {
      return {
        ...state,
        isFetching: false,
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
              if (state.sortBy === "id") {
                return a[state.sortBy] - b[state.sortBy];
              }
              return a[state.sortBy] > b[state.sortBy] ? 1 : -1;
            } else {
              if (state.sortBy === "id") {
                return b[state.sortBy] - a[state.sortBy];
              }
              return a[state.sortBy] > b[state.sortBy] ? -1 : 1;
            }
          })
        ]
      };
    }
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload[0],
        searchBy: action.payload[1]
      };
    }
    case ADD_NEW_DATA: {
      return { ...state, data: [...state.data, action.payload] };
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
const setError = error => ({ type: SET_ERROR, payload: error });
export const setSelectedItem = id => ({ type: SET_SELECTED_ITEM, payload: id });

export const addNewData = data => {
  data.id = Math.floor(Math.random() * (5000 - 1000)) + 1000;
  data.address = {
    streetAddress: data.streetAddress,
    city: data.city,
    state: data.state,
    zip: data.zip
  };
  return { type: ADD_NEW_DATA, payload: data };
};

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

export const setSearchQuery = (query, byProp) => ({
  type: SET_SEARCH_QUERY,
  payload: [query, byProp]
});

export const fetchData = size => dispatch => {
  dispatch(toggleIsFetching(true));
  const query = size === "all" ? dataAPI.getAll() : dataAPI.getChunk();
  query
    .then(data => {
      // dispatch(toggleIsFetching(false))
      dispatch(setData(data));
    })
    .catch(err => {
      dispatch(setError(err));
    });
  // dataAPI
  //   .getAll()
  //   .then(data => {
  //     dispatch(setData(data));
  //   })
  //   .catch(err => dispatch(setError(err)));
};

export default dataReducer;
