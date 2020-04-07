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
        <Card style={{ width: "18rem" }} key={film.Title} variant="warning">
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
                <Card.Subtitle className="mb-2 text-muted">
                  Released:
                </Card.Subtitle>
                <Card.Text> {movieData.Released}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Genre:
                </Card.Subtitle>
                <Card.Text> {movieData.Genre}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Director:
                </Card.Subtitle>
                <Card.Text> {movieData.Director}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Writer:
                </Card.Subtitle>
                <Card.Text> {movieData.Writer}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Country:
                </Card.Subtitle>
                <Card.Text> {movieData.Country}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Box Office:
                </Card.Subtitle>
                <Card.Text> {movieData.BoxOffice}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Meta Score:
                </Card.Subtitle>
                <Card.Text>{movieData.Metascore}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  imdb Rating:
                </Card.Subtitle>
                <Card.Text> {movieData.imdbRating}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Rated:
                </Card.Subtitle>
                <Card.Text> {movieData.Rated}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Language:
                </Card.Subtitle>
                <Card.Text>{movieData.Language}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Production:
                </Card.Subtitle>
                <Card.Text> {movieData.Production}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Plot:</Card.Subtitle>
                <Card.Text> {movieData.Plot}</Card.Text>
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
    </>
  ) : null;
};

export default Dashboard;
