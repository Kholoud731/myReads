import { BookDataType } from "../../actions/types";

interface Props {}
export interface LinkStateProps {
  data: BookDataType[] | null;
}
interface LinkDispatchProps {
  apiRequestAll: () => void;
}

export type LinkProps = Props & LinkStateProps & LinkDispatchProps;