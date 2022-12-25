import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BodyPrincipalComponent = () => {
  return (
    <>
      <p className="m-auto p-1">Books manager</p>
      <p>-{">"} esto se va a quitar xd</p>
      <Container>
        <Link to={"/books"}>
          <button className="btn btn-primary m-2">Books</button>
        </Link>
        <Link to={"/authors"}>
          <button className="btn btn-warning m-2">Authors</button>
        </Link>
        <Link to={"/genders"}>
          <button className="btn btn-danger m-2">Genders</button>
        </Link>
      </Container>
    </>
  );
};
