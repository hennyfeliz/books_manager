import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import { NavBarComponent } from "./Components/NavBar/NarBarComponent";
import { FooterComponent } from "./Components/Footer/FooterComponent";
import { SideBarComponent } from "./Components/SideBar/SideBarComponent";
import { BodyPrincipalComponent } from "./Components/Body/BodyPrincipalComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <NavBarComponent />
        </Container>

        <div className="App">
          <div className="App mt-3 border 1px solid red">
            <Container>
              <BodyPrincipalComponent />
            </Container>
          </div>
          <Container>
            <Button className="mt-5 w-75">Ir al menu</Button>
          </Container>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
