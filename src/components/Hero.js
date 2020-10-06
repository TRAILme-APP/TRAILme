import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home: {
        title: "TRAILme",
        subTitle: "",
        text: "",
      },
    };
  }

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron jumbotron-fluid p-0" id="jumbo">
          <Container className="hero-container" fluid={true}>
            <Row className="justify-content-center py-5">
              <Col md={8} sm={12}>
                {this.state.home.title && (
                  <h1 className="display-1 font-weight-bolder">
                    {this.state.home.title}
                  </h1>
                )}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Hero;
