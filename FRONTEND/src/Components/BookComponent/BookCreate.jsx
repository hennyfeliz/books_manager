import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import "./BooksStyles.css"

export const BookCreate = () => {

  const post_codigoCurso = useRef("");
  const post_descripcion = useRef("");
  const post_fechaInicio = useRef("");
  const post_fechaFin = useRef("");
  const post_facilitador = useRef("");
  const post_duracion = useRef("");

  const facilitadores = []

  const handleOnClick = () => {

  }

  return(
    <div className="w-75 container create-book">
      <h1 className="t-body-styles">Ingresando nuevo libro</h1>
      <Form className="t-body-styles">
        {/* CODIGO CURSO */}
        <Form.Group className="mb-3" controlId="formBasiccodCurso">
          <Form.Label>Codigo curso</Form.Label>
          <Form.Control
            type="number"
            ref={post_codigoCurso}
            placeholder="Introduzca el codigo del curso"
          />
        </Form.Group>

        {/* DESCRIPCION */}
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion del curso</Form.Label>
          <Form.Control
            type="text"
            ref={post_descripcion}
            placeholder="Introduzca la descripcion del curso"
            required
          />
        </Form.Group>

        {/* DURACION */}
        {/* <Form.Group className="mb-3" controlId="formBasiccodCurso">
          <Form.Label>Duracion del curso</Form.Label>
          <Form.Control type="number" placeholder="Codigo del curso" />
        </Form.Group> */}
        {/* FECHA INICIO */}
        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 m-3" controlId="formBasiccodCurso">
            <Form.Label>Fecha de inicio</Form.Label>
            <Form.Control type="date" ref={post_fechaInicio} />
            <Form.Text>Introduzca la fecha de inicio del curso</Form.Text>
          </Form.Group>

          {/* FECHA FIN */}
          <Form.Group className="mb-3 m-3" controlId="formBasiccodCurso">
            <Form.Label>Fecha de culminacion</Form.Label>
            <Form.Control type="date" ref={post_fechaFin} />
            <Form.Text>
              Introduzca la fecha (estimada) de la culminacion del curso
            </Form.Text>
          </Form.Group>
        </div>

        {/* DURACION */}
        <Form.Group className="mb-3" controlId="cedulaFacilitador">
          <Form.Label>Duracion del curso</Form.Label>
          <Form.Control
            type="text"
            ref={post_duracion}
            placeholder="Introduzca la duracion del curso en horas"
          />
        </Form.Group>

        {/* CEDULA FACILITADOR */}
        {/*         <Form.Group className="mb-3" controlId="cedulaFacilitador">
          <Form.Label>Cedula facilitador</Form.Label>
          <Form.Control
            type="text"
            ref={post_facilitador}
            placeholder="Introduzca la cedula facilitador"
          />
        </Form.Group>
 */}
        <div className="App">
          <div className="form-group">
            <Form.Select ref={post_facilitador}>
              {facilitadores.map((facilitador) => {
                return (
                  <option key={facilitador.cedula} value={facilitador.cedula}>
                    {`${facilitador.cedula} - ${facilitador.nombre} ${facilitador.apellido}`}
                  </option>
                );
              })}
            </Form.Select>
          </div>
        </div>

        <br />

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        */}
        {/* BOTON */}
        <Button variant="primary" onClick={handleOnClick} className="h-25 w-100">
          Crear curso
        </Button>
      </Form>
    </div>
  )
}


