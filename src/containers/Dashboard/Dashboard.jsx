import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, FormControl, Form } from "react-bootstrap";

const Dashboard = (props) => {
  const { data } = props;
  const [searchYear, changeSearchYear] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [modalShown, toggleModalShown] = useState(false);

  const fetchData = (search) => {
    fetch(`http://www.omdbapi.com/?i=${search}&apikey=4c65ecef&`)
      .then((response) => response.json())
      .then((movieData) => {
        setMovieData(movieData);
        console.log(movieData);
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
        <Card style={{ width: "18rem" }} key={film.Title}>
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body>
            <Card.Title>{film.Title}</Card.Title>
            <Card.Text>{film.Year}</Card.Text>
            <Button variant="primary" onClick={() => fetchData(film.imdbID)}>
              More info
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  return data && data.Search ? (
    <>
      {modalShown ? (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <Card style={{ width: "100%", flexDirection: "row" }}>
              {/* <Card.Img variant="top" src={movieData.Poster} /> */}
              <Card.Body>
                <Card.Title>Title: {movieData.Title}</Card.Title>
                <Card.Text>Released: {movieData.Released}</Card.Text>
                <Card.Text>Genre: {movieData.Genre}</Card.Text>
                <Card.Text>Director: {movieData.Director}</Card.Text>
                <Card.Text>Writer: {movieData.Writer}</Card.Text>
                <Card.Text>Country: {movieData.Country}</Card.Text>
                <Card.Text>Box Office: {movieData.BoxOffice}</Card.Text>
                <Card.Text>Meta Score: {movieData.MetaScore}</Card.Text>
                <Card.Text>imdb Rating: {movieData.imdbRating}</Card.Text>
                <Card.Text>Rated: {movieData.Rated}</Card.Text>
                <Card.Text>Language: {movieData.Language}</Card.Text>
                <Card.Text>Production: {movieData.Production}</Card.Text>
                <Card.Text>Plot: {movieData.Plot}</Card.Text>
                <Button
                  variant="warning"
                  onClick={() => toggleModalShown(false)}
                >
                  Close
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : null}
      <div className={styles.filter}>
        <Form inline>
          <Form.Text className="text-muted">Show results from year:</Form.Text>
          <FormControl
            type="text"
            placeholder="Year"
            className="mr-sm-2"
            onChange={(e) => changeSearchYear(e.target.value)}
          />
        </Form>
      </div>

      <div className={styles.filmDisplay}>{filterResults()}</div>
    </>
  ) : null;
};

export default Dashboard;
