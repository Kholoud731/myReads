import {
  ActionTypes,
  BookDataType,
  BOOK_DETAILS_UPDATED,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_DATA_FALIURE,
  FETCH_DATA_REQUEST,
  FETCH_ONE_DATA_SUCCESS,
  SEARCH_FOR_BOOKS_RESPONSE,
} from "../actions/types";
import { BooksReducerState } from "./types";
const initialState = {
  loading: false,
  allBooks: [],
  error: "",
  selectedBook: null,
  searchReuslts: [],
};

const dataReducer = (
  state: BooksReducerState = initialState,
  action: ActionTypes
): BooksReducerState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        allBooks: action.payload,
        error: "",
      };
    case FETCH_DATA_FALIURE:
      return {
        ...state,
        loading: false,
        allBooks:
          action.payload === "Error received getting all books"
            ? []
            : state.allBooks,
        error: action.payload,
        selectedBook:
          action.payload === "Can't find data for this id"
            ? null
            : state.selectedBook,
        searchReuslts:
          action.payload === "No results found" ? [] : state.searchReuslts,
      };
    case FETCH_ONE_DATA_SUCCESS:
      return {
        ...state,
        selectedBook: action.payload,
        loading: false,
        error: "",
      };
    case BOOK_DETAILS_UPDATED:
      const found = state.allBooks.find((a) => a.id === action.payload.id);
      let newState: BookDataType[] | [] = [...state.allBooks];
      if (!found) {
        action.payload.book.shelf = action.payload.shelf;
        newState = [...state.allBooks, action.payload.book];
      }
      if (found && action.payload.shelf === "notYetSelected") {
        newState = [
          ...state.allBooks.filter((elm) => elm.id !== action.payload.id),
        ];
      }

      return {
        ...state,
        allBooks: [
          ...newState.map((book: BookDataType): BookDataType => {
            if (book.id === action.payload.id) {
              book.shelf = action.payload.shelf;
            }
            return book;
          }),
        ],
        searchReuslts: state.searchReuslts.map((book) => {
          if (book.id === action.payload.id) {
            book.shelf = action.payload.shelf;
          }
          return book;
        }),
      };
    case SEARCH_FOR_BOOKS_RESPONSE:
      return {
        ...state,
        loading: false,
        error: "",
        searchReuslts: [
          ...action.payload.map((elm) => {
            let oldElement = state.allBooks.filter(
              (book) => book.id === elm.id
            )[0];
            if (oldElement) {
              elm = oldElement;
            }
            return elm;
          }),
        ],
      };
    default:
      return state;
  }
};

export default dataReducer;
