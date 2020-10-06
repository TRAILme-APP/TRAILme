import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import CardColumns from "react-bootstrap/CardColumns";
import dotenv from "dotenv";
import Button from "react-bootstrap/Button";

dotenv.config();

class Result extends Component {
	state = {
		trail: [],
		submitRange: this.props.submitRange,
	};

	savedTrail = (e) => {
		console.log(e);
	};

	componentDidMount() {
		axios
			.get(
				`https://www.hikingproject.com/data/get-trails?lat=${this.props.submitLat}&lon=${this.props.submitLong}&maxDistance=${this.props.submitRange}&key=200918803-d8c70ed7e17e195ff56fedfe354a6dfd`
			)
			// .then((response) => console.log(response.data.trails))
			.then((response) => this.setState({ trail: response.data.trails }));
	}

	componentDidUpdate(prevProps) {
		if (prevProps.submitRange !== this.props.submitRange) {
			this.setState({ submitRange: this.props.submitRange });
		}
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
										</a>
									</Card.Title>
									<Card.Text>{e.summary}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Rating: {e.stars}</small>
									{/* <button variant="dark" onClick={this.saveButton}>
										Save
									</button> */}
									<Row xs={2} md={4} lg={6}>
										<Col md={{ span: 3 }}>
											<Button
												value="savedButton"
												onClick={() => this.savedTrail(e)}
												variant="dark"
												size="sm"
											>
												Save
											</Button>
										</Col>
									</Row>
								</Card.Footer>
							</Card>
						);
					})}
				</CardColumns>
			</div>
		);
	}
}

export default Result;
