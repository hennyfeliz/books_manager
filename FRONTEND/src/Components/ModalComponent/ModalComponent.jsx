import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./ModalStyles.css"


export const ModalComponentImformation = ({
  info,
  infoClose,
  element
}) => {
  return (
    <div className="modal_styles">
      <Modal show={info} onHide={infoClose}>
        <Modal.Header closeButton>
          <Modal.Title className="display-6 modal_styles">{`Titulo: ${element.titulo}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal_styles">{element.descripcion}</p>
        </Modal.Body>
        <Modal.Footer>
          <p className="modal_styles">${element.precio} US</p>
        </Modal.Footer>
        <Modal.Footer>
          <Button className="p-1 h-25 modal_styles" variant="secondary" onClick={infoClose}>
            Cerrar
          </Button>
          <Button className="w-50 h-25 p-1 modal_styles">
            Agregar al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
