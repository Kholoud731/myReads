
import classes from './Shelf.module.css'
import Book from '../book/Book'
import { ShelfProps } from './types';


const Shelf = ({title, books}: ShelfProps) => {
  return (
    <div className={classes.bookshelf}>
     <h2 className={classes.title}>{title}</h2>
    <div className={classes.books}>
      <ol className={classes.grid}>
        {books.map(book => <Book  key={book.id} title={book.title} authors={book.authors} imageLinks={book.imageLinks} id={book.id} shelf={book.shelf} book={book}/>)}
      </ol>
    </div> 
  </div>
  );
};

export default Shelf;