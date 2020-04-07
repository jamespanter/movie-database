import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavBar = (props) => {
  const { changeCurrentSearch } = props;
  const [searchContents, changeSearchContents] = useState("Lord");

  return (
    <>
      <Navbar bg="warning" expand="lg">
        <Navbar.Brand href="#home">Movie Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => changeSearchContents(e.target.value)}
            />
            <Button
              variant="success"
              onClick={() => changeCurrentSearch(searchContents)}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
