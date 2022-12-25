import "./SideBarStyles.css";
import { sideBarElements } from "./SideBarElementsTest";
import book from "../resources/icons/book.png";
import { Container } from "react-bootstrap";

export const SideBarComponent = ({ display }) => {
  return (
    <>
      <div className={display ? "d-block" : "d-none"}>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse bg-white"
        >
          <div class="position-sticky">
            <Container>
              <img alt="books-icon" src={book} className="book-icon" />
            </Container>

            <div class="list-group list-group-flush mx-3 mt-4">
              {sideBarElements.map((element) => {
                return (
                  <a
                    href="asd"
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
      </div>
    </>
  );
};
