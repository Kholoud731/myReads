import { apiSearchForBook } from "../../actions";
import { connect } from 'react-redux';
import { AppState } from "../../store/rootStore";
import SearchPage from "./SearchPage";

const mapStateToProps = (state: AppState) => {
    return {
      results: state.data.searchReuslts
    }
  }
  
  export default connect(mapStateToProps,{apiSearchForBook})(SearchPage);