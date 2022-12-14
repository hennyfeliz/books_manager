import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="App mt-3 border 1px solid red">
        <Container>
          <p className="m-auto p-1">Books manager</p>
          <p>-{">"} esto se va a quitar xd</p>
        </Container>
      </div>
      <Container>
        <Button className="mt-5 w-75">Ir al menu</Button>
      </Container>
    </div>
  );
}

export default App;
