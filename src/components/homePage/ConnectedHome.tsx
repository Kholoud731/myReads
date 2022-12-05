import { apiRequestAll } from "../../actions";
import { AppState } from "../../store/rootStore";
import { connect } from "react-redux";
import Home from "./Home";
import { LinkStateProps } from "./types";

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
      data: state.data.allBooks,
    };
  };

  export default connect(mapStateToProps, { apiRequestAll })(Home);