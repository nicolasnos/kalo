import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Filter = () => {
  const [type, setStype] = useState("");
  return (
    <section>
      <InputGroup style={{ width: "90%", margin: "2rem" }}>
        <DropdownButton
          variant="outline-secondary"
          title="Hombre"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Mayor precio</Dropdown.Item>
          <Dropdown.Item href="#">Menor precio</Dropdown.Item>
          <Dropdown.Item href="#">Cantidad</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
    </section>
  );
};

export default Filter;
