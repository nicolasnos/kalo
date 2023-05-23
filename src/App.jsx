import { useState, useEffect } from "react";
import Header from "../components/Header";
import SHeader from "../components/SHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Start = () => {
  const [uEmail, setUEmail] = useState < string > "";
  const [uName, setUName] = useState < string > "";
  const [activate, setActivate] = useState < boolean > true;
  const [redirectSt, setRedirectS] = useState < boolean > false;

  const activateB = () => {
    uEmail.length >= 8 && uName.length >= 3
      ? setActivate(false)
      : setActivate(true);
  };

  useEffect(() => {
    activateB();
  }, [uEmail, uName]);

  if (redirectSt) {
    return <SHeader />;
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
    </div>
  );
};

export default Start;
