import React from "react";
import styles from "./Modal.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Modal = (props) => {
  const { movieData, toggleModalShown } = props;

  return (
    <div className={`${styles.modalContainer} ${styles.fadeInBck}`}>
      <div className={styles.modal}>
        <Card style={{ width: "100%", flexDirection: "row" }}>
          {/* <Card.Img variant="top" src={movieData.Poster} /> */}
          <Card.Body className="py-0">
            <div
              className="sticky-top d-flex justify-content-between bg-white"
              style={{ paddingTop: "1.25rem" }}
            >
              <Card.Title className="mt-1">Title: {movieData.Title}</Card.Title>
              <Button
                variant="warning"
                onClick={() => {
                  toggleModalShown(false);
                }}
              >
                Close
              </Button>
            </div>
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
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
