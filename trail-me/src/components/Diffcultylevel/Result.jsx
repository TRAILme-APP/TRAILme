import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import dotenv from "dotenv";

dotenv.config();
console.log(
  "This is the Hiking API Key: ",
  process.env.REACT_APP_HIKING_PROJECT_API_KEY
);

export default class Result extends Component {
  state = {
    trail: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://www.hikingproject.com/data/get-trails?lat=30.266666&lon=-97.73333&maxDistance=50&key=" +
          process.env.REACT_APP_HIKING_PROJECT_API_KEY
      )
      // .then((response) => console.log(response.data.trails))
      .then((response) => this.setState({ trail: response.data.trails }));
  }
  render() {
    return (
      <div>
        <CardColumns className="p-3">
          {this.state.trail.map((e) => {
            return (
              <Card>
                <Card.Img variant="top" src={e.imgSmallMed} />
                <Card.Body>
                  <Card.Title>
                    <a href={e.url} target="_blank">
                      {e.name}
                    </a>{" "}
                  </Card.Title>
                  <Card.Text>{e.summary}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Rating: {e.stars}</small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}
