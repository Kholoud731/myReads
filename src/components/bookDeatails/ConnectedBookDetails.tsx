import { apiRequestOne } from "../../actions";
import { AppState } from "../../store/rootStore";
import BookDetails from "./BookDetails";
import { BookDetailsSatetProp } from "./types";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState ): BookDetailsSatetProp => {
    return {
      book: state.data.selectedBook
    };
  };

  export default connect(mapStateToProps, { apiRequestOne })(BookDetails);