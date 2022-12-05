import { BookDataType } from "../../actions/types";

export interface BookDetailsSatetProp {
    book: BookDataType | null
}

export interface BookDetailsDispatchProps {
    apiRequestOne : (id: string) => void
}


export interface BookDetailsProps extends BookDetailsSatetProp, BookDetailsDispatchProps {}