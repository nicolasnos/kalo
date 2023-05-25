import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

/*   
    FILTRO QUE PUEDE SERVIR LUEGO
const filteredM = info.filter(
    (item) => item.category.includes("men") && !item.category.includes("women")
  );
  console.log(filteredM); */

const Filter = ({ lista }) => {
  const [type, setStype] = useState("Todos");
  const [search, setSearch] = useState(null);

  if (type === "Hombre") {
    const filteredM = lista.filter(
      (item) =>
        item.category.includes("men") && !item.category.includes("women")
    );
    console.log(filteredM);
  } else if (type === "Mujer") {
    const filteredM = lista.filter((item) => item.category.includes("wo"));
    console.log(filteredM);
  } else if (type === "Menor Precio") {
    const filtered = lista.sort((a, b) => a.price - b.price);
    console.log(filtered);
  } else if (type === "Mayor precio") {
    const filtered = lista.sort((a, b) => b.price - a.price);
    console.log(filtered);
  } else if (type === "Cantidad") {
    const filtered = lista.sort((a, b) => a.rating.count - b.rating.count);
    console.log(filtered);
  } else if (search) {
    const filtered = lista.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filtered);
  }
  return (
    <section>
      <InputGroup style={{ width: "90%", margin: "2rem" }}>
        <DropdownButton
          variant="outline-dark"
          title={type}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item
            onClick={() => {
              setStype("Todos");
            }}
          >
            Todos
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setStype("Mayor precio");
            }}
          >
            Mayor precio
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setStype("Menor Precio");
            }}
          >
            Menor precio
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setStype("Cantidad");
            }}
          >
            Cantidad
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              setStype("Hombre");
            }}
          >
            Hombre
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setStype("Mujer");
            }}
          >
            Mujer
          </Dropdown.Item>
        </DropdownButton>
        <Form.Control
          aria-label="Text input with dropdown button"
          placeholder="Escribe el item que quieres encontrar"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </InputGroup>
    </section>
  );
};

export default Filter;
