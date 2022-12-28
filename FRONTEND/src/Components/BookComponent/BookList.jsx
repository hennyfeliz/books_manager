import { Container, Pagination } from "react-bootstrap";


export const BookList = () => {
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
{/*             {curso.map((curso, index) => (
              <ListCurso curso={curso} index={index} />
            ))} */}
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
