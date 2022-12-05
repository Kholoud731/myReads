import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {BookDetailsProps } from "./types";
import ConnectedBook from "../book/ConnectedBook";

const BookDetails = ({ book, apiRequestOne }: BookDetailsProps) => {
  const { id } = useParams();
  useEffect(() => {
    
    
    if (!book && !id) {
      return;
    }
    if((id === book?.id ) ){
        return
    }
    if(id && (id !== book?.id ) ){
        apiRequestOne(id);
    }
  }, [id, apiRequestOne, book]);

  return(
    <div style={{
      padding: "40px",
      color: 'black',
      border: '2px solid white',
      margin: '20px'}}>
    {book &&
    <>
    <h1 style={{
      padding: "20px",}}>{book?.title}</h1>
     <ConnectedBook title={book.title} authors={book.authors} imageLinks={book.imageLinks} id={book.id} shelf={book.shelf} book={book}/>
     <p style={{
      padding: "40px",
      color: 'black',
      border: '2px solid gray',
      margin: '20px'
     }}>{book.description}</p>
     </>}
     </div>);
};

export default BookDetails;
