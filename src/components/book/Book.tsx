
import { Link } from 'react-router-dom';
import classes from './Book.module.css'
import BookShelfChanger from '../bookShelfChanger/BookShelfChanger';
import { BookProps } from './types';


const Book = ({imageLinks, title, authors, id, shelf, apiUpdateOne, book}: BookProps) => {

  const getURLImg = ()=> {
    if(imageLinks?.thumbnail ){
      return imageLinks.thumbnail
    }
    return 'https://www.pngmagic.com/product_images/solid-dark-grey-background.jpg'
  }

  const onChangeSelectHandeler = (e: any)=>{
    apiUpdateOne(id,e.target.value, book );
  }

  return (
    <li className={classes.card}>
    <div className={classes.book}>
    <div className={classes.bookTop}>
      < Link to={`/show/${id}`}
        className={classes.bookCover}
        style={{
          width: 128,
          height: 188,
          backgroundImage:
            `url(${getURLImg()})`,
        }}></Link>
      <BookShelfChanger onChangeSelectHandeler ={onChangeSelectHandeler} shelf={shelf}/>
    </div>
    <div className={classes.bookTitle} >{title}</div>
    <div className={classes.bookAuthors} >{authors}</div>
  </div>
  </li>
  );
};

export default Book;

