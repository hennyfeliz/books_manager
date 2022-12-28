import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { NavBarComponent } from "./Components/NavBar/NarBarComponent";
import { FooterComponent } from "./Components/Footer/FooterComponent";
import { SideBarComponent } from "./Components/SideBar/SideBarComponent";
import { BodyPrincipalComponent } from "./Components/Body/BodyPrincipalComponent";
import { BrowserRouter } from "react-router-dom";
import { PrincipalComponent } from "./Components/PrincipalComponents/PrincipalComponent";

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
        </div>
        <Container className="mt-4">
          <Card>
            <PrincipalComponent />
          </Card>
        </Container>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
