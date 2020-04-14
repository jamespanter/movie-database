import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavBar = (props) => {
  const {
    changeCurrentSearch,
    setData,
    setFetchPage,
    changeSearchYear,
  } = props;
  const [searchContents, changeSearchContents] = useState("");

  return (
    <div className={styles.nav}>
      <Navbar
        fixed="top"
        bg="dark"
        expand="lg"
        className="d-flex justify-content-center"
      >
        <Navbar.Brand href="#home" className="text-light d-none d-md-block">
          Movie Database
        </Navbar.Brand>
        <Form inline style={{ flexFlow: "unset" }}>
          <FormControl
            type="text"
            placeholder="Year"
            className="mr-2"
            onChange={(e) => changeSearchYear(e.target.value)}
          />
          <FormControl
            type="text"
            placeholder="Movie"
            className="mr-2"
            onChange={(e) => {
              changeSearchContents(e.target.value);
            }}
          />
          <Button
            variant="info"
            onClick={() => {
              window.scrollTo(0, 0);
              setData("");
              setFetchPage("1");
              changeCurrentSearch(searchContents);
            }}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
