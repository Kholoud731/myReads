import classes from '../shelf/Shelf.module.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ConnectedBook from '../book/ConnectedBook';
import { SearchProps } from './types';


const SearchPage = ({results,apiSearchForBook }: SearchProps) => {

  useEffect(()=>{
    return(()=>{
      apiSearchForBook('')
    })
  },[apiSearchForBook])

  const onChangeSearchHandler =(e: any)=>{
    apiSearchForBook(e.target.value)
  }
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link to={'/'}
        className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e)=> onChangeSearchHandler(e)}
        />
      </div>
    </div>
    <div className="search-books-results">
    <ol className={classes.grid}>
        {results.map(book => <ConnectedBook   key={book.id} title={book.title} authors={book.authors} imageLinks={book.imageLinks} id={book.id} shelf={book.shelf} book={book}/>)}
      </ol>
    </div>
  </div>
  );
};


export default SearchPage;

