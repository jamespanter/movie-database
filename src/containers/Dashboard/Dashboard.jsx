import React from "react";
import styles from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Dashboard = (props) => {
  const { data } = props;

  const printJsx = () => {
    return data.Search.map((film) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body>
            <Card.Title>{film.Title}</Card.Title>
            <Card.Text>Release year : {film.Year}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  return data && data.Search ? <div>{printJsx()}</div> : null;
};

export default Dashboard;
