import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import { NavBarComponent } from "./Components/NavBar/NarBarComponent";
import { FooterComponent } from "./Components/Footer/FooterComponent";
import { SideBarComponent } from "./Components/SideBar/SideBarComponent";

function App() {
  return (
    <>
      <Container>
      <NavBarComponent />
      </Container>
      
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
      <FooterComponent />
    </>
  );
}

export default App;
