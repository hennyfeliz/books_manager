import {
  Container,
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import hamburgerIcon from "./../resources/icons/hamburger.png";
import { SideBarComponent } from "../SideBar/SideBarComponent";
import { Link } from "react-router-dom";
import { elements } from "./NarBarElements";

export const NavBarComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div>
        <Container>
          <Navbar expand="lg" className="navbar_font mt-2">
            <img
              onClick={handleToggle}
              src={hamburgerIcon}
              alt="hamburger-icon"
              className="hamburger-icon"
            />
            <Container fluid>
              <Link to={"/"} className="text-decoration-none">
                <Navbar.Brand href="#" className="display-2">
                  Books manager
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {/* ALL COMPONENTS */}

                  {elements.map((element) => {
                    return (
                      <>
                        <NavDropdown
                          title={element.name}
                          id="navbarScrollingDropdown"
                        >
                          <Link
                            to={element.listRoute}
                            className="text-decoration-none"
                          >
                            <NavDropdown.Item href="#action4">
                              List all
                            </NavDropdown.Item>
                          </Link>
                          <Link
                            to={element.createRoute}
                            className="text-decoration-none"
                          >
                            <NavDropdown.Item href="#action4">
                              Create one
                            </NavDropdown.Item>
                          </Link>
                          <Link
                            to={element.updateRoute}
                            className="text-decoration-none"
                          >
                            <NavDropdown.Item href="#action4">
                              Update some
                            </NavDropdown.Item>
                          </Link>
                          <Link
                            to={element.deleteRoute}
                            className="text-decoration-none"
                          >
                            <NavDropdown.Item href="#action4">
                              Delete one
                            </NavDropdown.Item>
                          </Link>
                          {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                      </>
                    );
                  })}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <SideBarComponent display={navbarOpen} />
      </div>
    </>
  );
};

const anotherNavBarComponent = () => {
  return (
    <>
      {/* BOOKS */}
      <NavDropdown title="Books" id="navbarScrollingDropdown">
        <Link to={"/books/list"}>
          <NavDropdown.Item href="#action4">List all</NavDropdown.Item>
        </Link>
        <NavDropdown.Item href="#action4">Create one</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Update some</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Delete one</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
      </NavDropdown>
      {/* AUTHRS */}
      <NavDropdown title="Authors" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action4">List all</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Create one</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Update some</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Delete one</NavDropdown.Item>
      </NavDropdown>
      {/* GENDERS */}
      <NavDropdown title="Genders" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action4">List all</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Create one</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Update some</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Delete one</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
