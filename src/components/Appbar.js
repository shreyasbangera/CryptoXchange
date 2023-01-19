import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Appbar = () => {
  return (
    <Navbar className="nav" bg="dark">
      <Container>
        <Navbar.Brand style={{ color: "#ffc107", fontWeight: "bold" }} href="/">
          CryptoXchange
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Appbar;
