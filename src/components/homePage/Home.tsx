import "../../App.css";
import Header from "../header/Header";
import Shelf from "../shelf/Shelf";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { LinkProps } from "./types";



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
            {data?.length && (
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


export default Home;
