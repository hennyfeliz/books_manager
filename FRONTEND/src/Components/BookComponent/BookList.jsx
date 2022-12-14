import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import axios from "axios";
import { PrincipalCardComponent } from "../CardComponent/PrincipalCardComponent";
import { Element } from "../CardComponent/ElementCard";
import "./BooksStyles.css";
import { ModalComponentImformation } from "../ModalComponent/ModalComponent";

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7191/api/books`)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((response) => {
        console.log(response.data);
        setBooks(response.data);
      });
  }, []);



  return (
    <>
      <PrincipalCardComponent>
        <div className="element_styles d-flex flex-wrap mb-4">
          {books.map((element) => {
            return <Element element={element} />;
          })}
        </div>
      </PrincipalCardComponent>
    </>
  );
};
