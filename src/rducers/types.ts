import { BookDataType } from "../actions/types";

export interface BooksReducerState  {
    loading: boolean,
    allBooks: BookDataType[] | [],
    error: string,
    selectedBook: BookDataType | null,
    searchReuslts: BookDataType[] | []
}
