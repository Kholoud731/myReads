export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_FALIURE = "FETCH_DATA_FALIURE";
export const FETCH_ALL_DATA_SUCCESS = "FETCH_ALL_DATA_SUCCESS";
export const FETCH_ONE_DATA_SUCCESS = "FETCH_ONE_DATA_SUCCESS";
export const BOOK_DETAILS_UPDATED = "BOOK_DETAILS_UPDATED";
export const SEARCH_FOR_BOOKS_RESPONSE = "SEARCH_FOR_BOOKS_RESPONSE";

export type BookDataType = {
  title: string;
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  industryIdentifiers: {
    identifier: string;
    type: string;
  }[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  readingModes: { text: boolean; image: boolean };
  shelf: string;
};

interface FetchDataRequest {
  type: typeof FETCH_DATA_REQUEST;
}
interface FetchAllDataSuccess {
  type: typeof FETCH_ALL_DATA_SUCCESS;
  payload: BookDataType[];
}

interface FetchDataFaliure {
  type: typeof FETCH_DATA_FALIURE;
  payload: string;
}

interface FetchOneDataSuccess {
  type: typeof FETCH_ONE_DATA_SUCCESS;
  payload: BookDataType;
}

interface SearchForBooks {
  type: typeof SEARCH_FOR_BOOKS_RESPONSE;
  payload: BookDataType[];
}

// udpated book response

export interface UpdatedBookData {
  id: string;
  shelf: string;
  book: BookDataType;
}

interface BooksUpdated {
  type: typeof BOOK_DETAILS_UPDATED;
  payload: UpdatedBookData;
}
export type ActionTypes =
  | FetchDataRequest
  | FetchAllDataSuccess
  | FetchDataFaliure
  | FetchOneDataSuccess
  | BooksUpdated
  | SearchForBooks;

export type AppActions = ActionTypes;
