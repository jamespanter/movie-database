import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, FormControl, Form } from "react-bootstrap";

const Dashboard = (props) => {
  const { data } = props;
  const [searchYear, changeSearchYear] = useState("");

  const printJsx = (array) => {
    return array.map((film) => {
      return (
        <Card style={{ width: "18rem" }} key={film.Title}>
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
      return searchYear !== "" && searchYear.length === 4
        ? film.Year === searchYear
        : true;
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
          onChange={(e) => changeSearchYear(e.target.value)}
        />
        <Button variant="success" onClick={() => filterResults(searchYear)}>
          Filter
        </Button>
      </Form>
      <div className={styles.filmDisplay}>{filterResults()}</div>
    </>
  ) : null;
};

export default Dashboard;
