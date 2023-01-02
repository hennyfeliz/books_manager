import { Button } from "./ButtonComponent";
import "./Element.css";
import { useState } from "react";
import { ModalComponentImformation } from "../ModalComponent/ModalComponent";

export const Element = ({ element }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(false);
  const [edit, setEdit] = useState(false);

  const editClose = () => setEdit(false);
  const editShow = () => setEdit(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const infoClose = () => setInfo(false);
  const infoShow = () => setInfo(true);

  return (
    <div className="product m-4">
      <img
        src="https://picsum.photos/180"
        alt="products"
        className="product_img"
      />
      <h2 className="product_name">{element.titulo}</h2>
      <div className="product_details">
        {/* <p className="product_oldprice">300</p> */}
        <p className="product_newprice">${element.precio} US</p>
        <Button onClick={handleShow} />
      </div>
      <ModalComponentImformation
        info={info}
        infoClose={infoClose}
        infoName="Curso"
      />
    </div>
  );
};
