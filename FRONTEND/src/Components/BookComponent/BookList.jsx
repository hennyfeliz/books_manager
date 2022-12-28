import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";

export const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {

  },[])
  return (
    <>
      <h1>Books list</h1>
      <div className="p-3 t-body-styles">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Numero</th>
              <th className="text-center">Codigo curso</th>
              <th className="text-center">Descripcion</th>
              <th className="text-center">Duracion</th>
              <th className="text-center">Facilitador</th>
              <th className="text-center">#</th>
            </tr>
          </thead>
          <tbody>
            {books.map((element) => {
              return(
                <tr key={element.codigoCurso}>
              <td className="text-center">{1}</td>
              <td className="text-center">{element.codigoCurso}</td>
              <td className="text-center">{element.descripcion}</td>
              <td className="text-center">{element.duracion}</td>

              <td className="text-center">{`${element.facilitador.nombre} ${element.facilitador.apellido}`}</td>
              <td className="text-center">
                <div className="btn-group">
                  <button onClick={"editShow"}>
                    <img
                      src={"editIconRedound"}
                      alt="edit-icon"
                      className="myReact-icons"
                    />
                  </button>
                  <button onClick={"infoShow"}>
                    <img
                      src={"infoIcon"}
                      alt="edit-icon"
                      className="myReact-icons"
                    />
                  </button>
                  {/* MODAL BUTTON */}
                  <button onClick={"handleShow"}>
                    <img
                      src={"deleteIcon"}
                      alt="edit-icon"
                      className="myReact-icons m-1"
                    />
                    {/* <i className="fa fa-trash"></i> */}
                  </button>
                </div>
              </td>
            </tr>
              )
            })}
            
          </tbody>
        </table>
        <div className="align-content-center">
          <nav aria-label="Page navigation example">
            <Container>
              <Pagination>
                {/*                 <Pagination.Prev onClick={handlerRestPage} />
                <Pagination.Item active>{page + 1}</Pagination.Item>
                <Pagination.Next onClick={handlerSumPage} /> */}
              </Pagination>
              <br />
              {/*               <footer className="blockquote-footer">
                {`Pagina ${page + 1} de ${totalPages}`}{" "}
                <cite title="Source Title">Cursos</cite>
              </footer> */}
            </Container>
          </nav>
        </div>
      </div>
    </>
  );
};
