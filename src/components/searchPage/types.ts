import { BookDataType } from "../../actions/types"

export type SearchProps = {
    results: BookDataType[] | [],
    apiSearchForBook: (data: string)=> void
  }
  