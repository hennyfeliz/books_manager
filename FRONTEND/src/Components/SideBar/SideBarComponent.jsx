import "./SideBarStyles.css";
import { sideBarElements } from "./SideBarElementsTest";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";

export const SideBarComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div class="position-sticky">
          <Container>
          <button className="btn btn-primary w-50" onClick={handleToggle}>
            {navbarOpen ? "Close" : "Open"}
          </button>
          </Container>

          <div class="list-group list-group-flush mx-3 mt-4">
            {sideBarElements.map((element) => {
              return (
                <a
                  to={""}
                  className="sidebar_font list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  {/* <i class="fas fa-tachometer-alt fa-fw me-3"></i> */}
                  <span>{element.text}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
