import { useState, useEffect } from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import Store from "./components/Store";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Start = () => {
  const [uEmail, setUEmail] = useState("");
  const [uName, setUName] = useState("");
  const [activate, setActivate] = useState("");
  const [redirectSt, setRedirectS] = useState("");

  const activateB = () => {
    uEmail.length >= 8 && uName.length >= 3
      ? setActivate(false)
      : setActivate(true);
  };

  useEffect(() => {
    activateB();
  }, [uEmail, uName]);

  if (redirectSt) {
    return <Store />;
  }
  return (
    <div>
      <Header />
      <h2>
        Bienvenidos a una tienda virtual como ninguna otra, por favor llena el
        siguiente formulario
      </h2>
      <Form>
        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setUEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tu nombre</Form.Label>
          <Form.Control
            type="email"
            placeholder="Jose Rodriguez"
            onChange={(e) => {
              setUName(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
      <Button
        onClick={() => {
          setRedirectS(true);
        }}
        className="m-3"
        variant="dark"
        size="lg"
        disabled={activate}
      >
        Entrar
      </Button>
      <Button className="m-3" variant="dark" size="lg">
        Registrarse
      </Button>
    </div>
  );
};

export default Start;
