import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Modal = (props) => {
  const {
    movieData,
    toggleModalShown,
    bodyOverflow,
    toggleBodyOverlow,
  } = props;

  const hideScroll = () => {
    console.log("function called");
    bodyOverflow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  useEffect(() => {
    hideScroll();
  }, [bodyOverflow]);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <Card style={{ width: "100%", flexDirection: "row" }}>
          {/* <Card.Img variant="top" src={movieData.Poster} /> */}
          <Card.Body>
            <Card.Title className="mt-3">Title: {movieData.Title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released:</Card.Subtitle>
            <Card.Text> {movieData.Released}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Genre:</Card.Subtitle>
            <Card.Text> {movieData.Genre}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Director:</Card.Subtitle>
            <Card.Text> {movieData.Director}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Writer:</Card.Subtitle>
            <Card.Text> {movieData.Writer}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Country:</Card.Subtitle>
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
            <Card.Subtitle className="mb-2 text-muted">Rated:</Card.Subtitle>
            <Card.Text> {movieData.Rated}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Language:</Card.Subtitle>
            <Card.Text>{movieData.Language}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Production:
            </Card.Subtitle>
            <Card.Text> {movieData.Production}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Plot:</Card.Subtitle>
            <Card.Text> {movieData.Plot}</Card.Text>
            <Button
              variant="warning"
              onClick={() => {
                toggleModalShown(false);
                toggleBodyOverlow(false);
              }}
            >
              Close
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
