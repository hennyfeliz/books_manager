import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export const ModalComponentImformation = ({
  info,
  infoClose,
  message,
  infoName,
}) => {
  return (
    <>
      <Modal show={info} onHide={infoClose}>
        <Modal.Header closeButton>
          <Modal.Title className="display-6">{`Informacion de ${infoName}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>nada</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={infoClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
