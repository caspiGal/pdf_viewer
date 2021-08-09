import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand style={{ fontSize: 20 }}>
            ד"ר ניר ארגוב - מורה דרך
          </Navbar.Brand>
          <Navbar
            aria-controls="responsive-navbar-nav"
            className="justify-content-end"
          />
          <Navbar.Text style={{ fontSize: 11 }}>
            Email: <a href="#email">nirar2012@gmail.com</a> Phone:{" "}
            <a href="#phone">052-3703240 </a>{" "}
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
