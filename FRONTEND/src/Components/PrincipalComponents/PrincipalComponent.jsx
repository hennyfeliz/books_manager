import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BookPrincipalComponent } from "../BookComponent/BookPrincipalComponent.jsx";
import { AuthorPrincipalComponent } from "../AuthorComponent/AuthorPrincipalComponent.jsx";
import { GenderPrincipalComponent } from "../Gender/GenderPrincipalComponent.jsx";
import { GenderList } from "../Gender/GenderList.jsx";
import { GenderUpdate } from "../Gender/GenderUpdate.jsx";
import { GenderCreate } from "../Gender/GenderCreate.jsx";
import { AuthorList } from "../AuthorComponent/AuthorList.jsx";
import { AuthorCreate } from "../AuthorComponent/AuthorCreate.jsx";
import { AuthorUpdate } from "../AuthorComponent/AuthorUpdate.jsx";
import { BookList } from "../BookComponent/BookList.jsx";
import { BookCreate } from "../BookComponent/BookCreate.jsx";
import { BookUpdate } from "../BookComponent/BookUpdate";

export const PrincipalComponent = () => {
  return (
    <>
      <Container>
        <h1>All components</h1>
      </Container>
      <Container>
        <Routes>
          <Route path="/books" element={<BookPrincipalComponent />} />
          <Route path="/books/list" element={<BookList />} />
          <Route path="/books/update" element={<BookUpdate />} />
          <Route path="/books/create" element={<BookCreate />} />
          <Route path="/authors" element={<AuthorPrincipalComponent />} />
          <Route path="/authors/list" element={<AuthorList />} />
          <Route path="/authors/update" element={<AuthorUpdate />} />
          <Route path="/authors/create" element={<AuthorCreate />} />
          <Route path="/genders" element={<GenderPrincipalComponent />} />
          <Route path="/genders/list" element={<GenderList />} />
          <Route path="/genders/update" element={<GenderUpdate />} />
          <Route path="/genders/create" element={<GenderCreate />} />
        </Routes>
      </Container>
    </>
  );
};
