import { BookDataType } from "../../actions/types"

  export interface BookDispatchProps {
    apiUpdateOne : (id: string, shelf: string, book: BookDataType) => void
  }

  export interface BookProps extends BookDispatchProps {
    imageLinks?: {
      smallThumbnail: string,
      thumbnail: string 
    },
    title: string,
    authors: string[],
    id: string,
    shelf: string,
    book: BookDataType
  }
  