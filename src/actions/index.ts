import { Dispatch } from "redux"; // to import dispatch type from redux
import { AppState } from "../store/rootStore";
import {
  ActionTypes,
  BOOK_DETAILS_UPDATED,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_DATA_FALIURE,
  FETCH_DATA_REQUEST,
  FETCH_ONE_DATA_SUCCESS,
  SEARCH_FOR_BOOKS_RESPONSE,
} from "./types";
import { BookDataType } from "./types";
import * as BooksAPI from "../BooksAPI";

// this part for fetching all books
export const requestAction = (): ActionTypes => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const getAllBooks = (data: BookDataType[]): ActionTypes => {
  return {
    type: FETCH_ALL_DATA_SUCCESS,
    payload: data,
  };
};

export const errorReceived = (msg: string): ActionTypes => {
  return {
    type: FETCH_DATA_FALIURE,
    payload: msg,
  };
};

//  async using thunk
export const apiRequestAll = () => {
  return (dispatch: Dispatch<ActionTypes>, getState: AppState) => {
    dispatch(requestAction());
    return BooksAPI.getAll()
      .then((data: BookDataType[]) => {
        dispatch(getAllBooks(data));
      })
      .catch((error) => {
        dispatch(errorReceived("Error received getting all books"));
      });
  };
};

// this part for fetching one book

export const getOneBook = (data: BookDataType): ActionTypes => {
  return {
    type: FETCH_ONE_DATA_SUCCESS,
    payload: data,
  };
};

//  async using thunk
export const apiRequestOne = (id: string) => {
  return (dispatch: Dispatch<ActionTypes>, getState: AppState) => {
    dispatch(requestAction());
    return BooksAPI.get(id)
      .then((data: BookDataType) => {
        dispatch(getOneBook(data));
      })
      .catch((error) => {
        dispatch(errorReceived("Can't find data for this id"));
      });
  };
};

// this part for updateing one book
export const reciveUpdatedBooks = (
  id: string,
  shelf: string,
  book: BookDataType
): ActionTypes => {
  return {
    type: BOOK_DETAILS_UPDATED,
    payload: {
      id,
      shelf,
      book,
    },
  };
};

//  async using thunk
export const apiUpdateOne = (id: string, shelf: string, book: BookDataType) => {
  return (dispatch: Dispatch<ActionTypes>, getState: AppState) => {
    dispatch(requestAction());
    return BooksAPI.update(id, shelf)
      .then((data) => {
        dispatch(reciveUpdatedBooks(id, shelf, book));
      })
      .catch((error) => {
        dispatch(errorReceived("Failed to change the shelf for this book"));
      });
  };
};

// this part for searching
export const recivedBookSearchResults = (data: BookDataType[]): ActionTypes => {
  return {
    type: SEARCH_FOR_BOOKS_RESPONSE,
    payload: data,
  };
};

//  async using thunk
export const apiSearchForBook = (query: string) => {
  return (dispatch: Dispatch<ActionTypes>, getState: AppState) => {
    dispatch(requestAction());
    return BooksAPI.search(query)
      .then((data: BookDataType[]) => {
        if (data.length > 0) {
          dispatch(recivedBookSearchResults(data));
        } else {
          throw new Error("No results found");
        }
      })
      .catch((error) => {
        dispatch(errorReceived("No results found"));
      });
  };
};
