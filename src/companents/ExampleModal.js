import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";

function ExampleModal({ person, setPerson }) {
  const [modal, setModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    telephone: "",
  });

  const textValue = (text, id) => {
    switch (id) {
      case "name":
        setFormValue({
          name: text,
          surname: formValue.surname,
          telephone: formValue.telephone,
        });
        break;
      case "surname":
        setFormValue({
          name: formValue.name,
          surname: text,
          telephone: formValue.telephone,
        });
        break;
      case "telephone":
        setFormValue({
          name: formValue.name,
          surname: formValue.surname,
          telephone: text,
        });
        break;
      default:
        console.log("error");
        break;
    }
  };
  const save = () => {
    toggle();
    person.length === 0
      ? setPerson([
          {
            name: formValue.name,
            surname: formValue.surname,
            telephone: formValue.telephone,
            id: 1,
          },
        ])
      : setPerson([
          ...person,
          {
            name: formValue.name,
            surname: formValue.surname,
            telephone: formValue.telephone,
            id: person[person.length - 1].id + 1,
          },
        ]);
  };
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Button className="peson-add" color="danger" onClick={toggle}>
          Kişi Ekle
        </Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Ad Giriniz..."
            defaultValue=""
            onChange={(e) => textValue(e.target.value, "name")}
          />
          {/* <br /> */}
          <Input
            type="text"
            placeholder="Soyad Giriniz..."
            defaultValue=""
            onChange={(e) => textValue(e.target.value, "surname")}
          />
          <br />
          <Input
            type="number"
            placeholder="TelefonGiriniz..."
            defaultValue=""
            onChange={(e) => textValue(e.target.value, "telephone")}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => save()}>
            Kaydet
          </Button>
          <Button color="secondary" onClick={toggle}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ExampleModal;
