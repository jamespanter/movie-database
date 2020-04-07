import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, FormControl, Form } from "react-bootstrap";

const Dashboard = (props) => {
  const { data } = props;
  const [searchContents, changeSearchContents] = useState("");

  const printJsx = (array) => {
    return array.map((film) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body>
            <Card.Title>{film.Title}</Card.Title>
            <Card.Text>{film.Year}</Card.Text>
            <Button variant="primary">More info</Button>
          </Card.Body>
        </Card>
      );
    });
  };

  const filterResults = () => {
    let filteredArray = [...data.Search];
    filteredArray = filteredArray.filter((film) => {
      return searchContents !== "" ? film.Year === searchContents : true;
    });
    return printJsx(filteredArray);
  };

  useEffect(() => {}, []);

  return data && data.Search ? (
    <>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search for year"
          className="mr-sm-2"
          onChange={(e) => changeSearchContents(e.target.value)}
        />
        <Button variant="success" onClick={() => filterResults(searchContents)}>
          Filter
        </Button>
      </Form>
      <div className={styles.filmDisplay}>{filterResults()}</div>
    </>
  ) : null;
};

export default Dashboard;
