import "./SideBarStyles.css";
import { sideBarElements } from "./SideBarElementsTest";
import { Link } from "react-router-dom";

export const SideBarComponent = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div class="position-sticky">
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

