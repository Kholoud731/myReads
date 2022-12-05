import "../../App.css";
import Header from "../header/Header";
import Shelf from "../shelf/Shelf";
import { useEffect } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootStore";
import { apiRequestAll } from "../../actions";
import { LinkProps, LinkStateProps } from "./types";
import { Link } from 'react-router-dom';



const Home = ({ apiRequestAll , data }: LinkProps) => {

  useEffect(() => {
    
    if(data?.length === 0){
      apiRequestAll();
    }

    return () => {};
  }, [apiRequestAll, data]);

  return (
    <div className="app">
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            {data && (
              <div>
                <Shelf
                  title="Currently Reading"
                  books={data.filter(
                    (book) => book.shelf === "currentlyReading"
                  )}
                />
                <Shelf
                  title="Read"
                  books={data.filter((book) => book.shelf === "read")}
                />
                <Shelf
                  title="Want to Read"
                  books={data.filter((book) => book.shelf === "wantToRead")}
                />
              </div>
            )}
          </div>
          <div className="open-search">
            <Link to={'/search'}>Add a book</Link>
          </div>
        </div>
      
    </div>
  );
};
const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    data: state.data.allBooks,
  };
};

export default connect(mapStateToProps, { apiRequestAll })(Home);
