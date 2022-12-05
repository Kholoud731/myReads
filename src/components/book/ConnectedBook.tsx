import { connect } from "react-redux";
import { apiUpdateOne } from "../../actions";
import Book from "./Book";

const mapDispatchToProps = {
    apiUpdateOne
}

export default connect(null, mapDispatchToProps )(Book);