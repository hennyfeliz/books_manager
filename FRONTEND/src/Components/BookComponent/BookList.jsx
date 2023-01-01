import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import axios from "axios";
import { PrincipalCardComponent } from "../CardComponent/PrincipalCardComponent";
import { Element } from "../CardComponent/ElementCard";
import "./BooksStyles.css"

export const BookList = () => {
  const [books, setBooks] = useState([]);

  const element = [{ name: "" }, { name: "" }];

  useEffect(() => {
    /*axios.get(`https://localhost:7191/api/books`)
    .then((response) => {
      alert("funciona")
      console.log(response.data)
    })
    .catch((response) => {
      alert("no funciona")
      console.log(response.data)
    })
    */
  }, []);

  return (
    <>
      <PrincipalCardComponent>
        <div className="element_styles">
          {element.map((element) => {
            return <Element />;
          })}
        </div>
      </PrincipalCardComponent>
    </>
  );
};
