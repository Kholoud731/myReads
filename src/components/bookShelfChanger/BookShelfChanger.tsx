
// import classes from './Book.module.css'

import { BookShelfChangerType } from "./types";



const BookShelfChanger = ({onChangeSelectHandeler, shelf}: BookShelfChangerType) => {


  return (

      <div className="book-shelf-changer">
        <select onChange={onChangeSelectHandeler} value={shelf ? shelf : 'notYetSelected'}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="notYetSelected">None</option>
        </select>
      </div>
  );
};

export default BookShelfChanger;