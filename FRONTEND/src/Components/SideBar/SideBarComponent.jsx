import "./SideBarStyles.css";
import { sideBarElements } from "./SideBarElementsTest";
import book from "../resources/icons/book.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import bookIcon from "../resources/icons/user.png"

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
                  <Link
                    to={element.route}
                    className="sidebar_font list-group-item list-group-item-action py-2 ripple"
                    aria-current="true"
                  >
                    {/* <i class="fas fa-tachometer-alt fa-fw me-3"></i> */}
                    <li>{element.text}</li>
                  </Link>
                );
              })}
            </div>
          </div>
          <footer>
            <div className="user-border">
              <div className="user-div">
                <img
                  src={bookIcon}
                  alt="user-icon"
                  className="user-icon"
                />
                <p className="user-text">Nombre usuario</p>
              </div>
            </div>
          </footer>
        </nav>
      </div>
    </>
  );
};
