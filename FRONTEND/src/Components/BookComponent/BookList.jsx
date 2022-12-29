import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import axios from "axios";

export const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7191/api/books`)
    .then((response) => {
      alert("funciona")
      console.log(response.data)
    })
    .catch((response) => {
      alert("no funciona")
      console.log(response.data)
    })
  },[])
  
  return (
    <>
      <h1>Books list</h1>
      <div className="p-3 t-body-styles">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">titulo</th>
              <th className="text-center">descripcion</th>
              <th className="text-center">fechaLanzamiento</th>
              <th className="text-center">cantidadPaginas</th>
              <th className="text-center">cantidadRestantes</th>
              <th className="text-center">autorId</th>
              <th className="text-center">generoId</th>
              <th className="text-center">precio</th>
              <th className="text-center">imagen</th>
              <th className="text-center">pathImagen</th>
              <th className="text-center">autor</th>
              <th className="text-center">genero</th>
              <th className="text-center">comentario</th>
            </tr>
          </thead>
          <tbody>
            {books.map((element) => {
              return(
                <tr key={element.codigoCurso}>
              <td className="text-center">{1}</td>
              <td className="text-center">{element.titulo}</td>
              <td className="text-center">{element.descripcion}</td>
              <td className="text-center">{element.fechaLanzamiento}</td>
              <td className="text-center">{element.cantidadPaginas}</td>
              <td className="text-center">{element.cantidadRestantes}</td>
              <td className="text-center">{element.autorId}</td>
              <td className="text-center">{element.generoId}</td>
              <td className="text-center">{element.precio}</td>
              <td className="text-center">{element.imagen}</td>
              <td className="text-center">{element.pathImagen}</td>
              <td className="text-center">{element.autor}</td>
              <td className="text-center">{element.genero}</td>
              <td className="text-center">{element.comentario}</td>

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
