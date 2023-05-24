import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Store = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    showApi();
  }, []);

  const showApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setInfo(data);
    console.log(info);
  };

  /*   
    FILTRO QUE PUEDE SERVIR LUEGO
const filteredM = info.filter(
    (item) => item.category.includes("men") && !item.category.includes("women")
  );
  console.log(filteredM); */

  const itemsM = info.map((item, i) => (
    <Card style={{ width: "18rem", margin: "1.5rem" }} key={i}>
      <Card.Img
        variant="top"
        src={item.image}
        style={{ width: "15rem", height: "13rem", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Badge bg="light" text="dark">
          {item.price}
        </Badge>
        <Button variant="primary">
          <AiOutlineShoppingCart />
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Store;
