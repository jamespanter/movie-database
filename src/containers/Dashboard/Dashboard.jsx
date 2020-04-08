import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import Modal from "../../components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, FormControl, Form } from "react-bootstrap";

const Dashboard = (props) => {
  const { data } = props;
  const [searchYear, changeSearchYear] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [modalShown, toggleModalShown] = useState(false);

  const fetchData = (search) => {
    fetch(`https://www.omdbapi.com/?i=${search}&apikey=4c65ecef&`)
      .then((response) => response.json())
      .then((movieData) => {
        setMovieData(movieData);
        toggleModalShown(true);
      })
      .catch((error) => console.log(error));
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

  const printJsx = (array) => {
    return array.map((film) => {
      return (
        <Card
          style={{ width: "18rem" }}
          key={film.imdbID}
          bg="light"
          className="text-center m-2"
        >
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body>
            <Card.Title>{film.Title}</Card.Title>
            <Card.Text>{film.Year}</Card.Text>
            <Button variant="info" onClick={() => fetchData(film.imdbID)}>
              More info
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  return data && data.Search ? (
    <div className={styles.dashboard}>
      {modalShown ? (
        <Modal movieData={movieData} toggleModalShown={toggleModalShown} />
      ) : null}
      <div className={styles.filter}>
        <Form inline>
          <Form.Text className="text-muted">FILTER:</Form.Text>
          <FormControl
            type="text"
            placeholder="Year"
            className="mr-sm-2"
            onChange={(e) => changeSearchYear(e.target.value)}
          />
        </Form>
      </div>
      <div className={styles.filmDisplay}>{filterResults()}</div>
    </div>
  ) : (
    <div className={styles.dashboard}>
      <div className={styles.noResults}>
        <h3>No Results!</h3>
        <p>This could be because:</p>
        <p>1. Your search was not specific enough</p>
        <p>2. There are no movies by your search terms</p>
      </div>
    </div>
  );
};

export default Dashboard;
