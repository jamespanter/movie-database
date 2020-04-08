import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavBar = (props) => {
  const { changeCurrentSearch } = props;
  const [searchContents, changeSearchContents] = useState("");

  return (
    <Navbar fixed="top" bg="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-light">
        Movie Database
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search Movie"
          className="mr-sm-2"
          onChange={(e) => changeSearchContents(e.target.value)}
        />
        <Button
          variant="info"
          onClick={() => changeCurrentSearch(searchContents)}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
