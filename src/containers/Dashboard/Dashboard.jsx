import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Modal from "../../components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Dashboard = (props) => {
  const { data, fetchPage, searchYear } = props;
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
    return array.map((film, index) => {
      return (
        <div
          className={`${styles.cardContainer} ${styles.fadeInBck}`}
          key={film.imdbID}
          style={{
            animationDelay: `${
              +index < 10 ? index * 0.07 : (index - 10 * (fetchPage - 2)) * 0.07
            }s`,
          }}
        >
          <Card
            bg="light"
            className="text-center border-0"
            style={{
              width: "18rem",
            }}
          >
            <Card.Img
              variant="top"
              src={
                film.Poster !== "N/A"
                  ? film.Poster
                  : "https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg"
              }
              alt={film.Title}
            />
            <Card.Body>
              <Card.Title style={{ height: "48px" }}>{film.Title}</Card.Title>
              <Card.Text>{film.Year}</Card.Text>
              <Button
                variant="info"
                onClick={() => {
                  fetchData(film.imdbID);
                }}
              >
                More info
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return data && data.Search ? (
    <div className={styles.dashboard}>
      {modalShown ? (
        <Modal movieData={movieData} toggleModalShown={toggleModalShown} />
      ) : null}

      <div className={styles.filmDisplayContainer}>
        <div className={styles.filmDisplay}>{filterResults()}</div>
      </div>
    </div>
  ) : (
    <div className={styles.dashboard}>
      <div className={styles.noResults}>
        <h3>No Results!</h3>
        <p>This could be because:</p>
        <p>1. There are no movies by your search terms</p>
        <p>2. Your search was not specific enough</p>
      </div>
    </div>
  );
};

export default Dashboard;
