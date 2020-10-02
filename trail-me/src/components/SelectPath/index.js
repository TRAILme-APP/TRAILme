import React, { useState } from "react";
// import UserLocation from "../UserLocation";
import Diffcultylevel from "../Diffcultylevel";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

function SelectPath() {

  const [path, setPath] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setPath(value);
  };


  console.log(path);

  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <Nav>
              <Diffcultylevel
                onchange={handleInputChange}
              />
              <Button variant="success">Let's Go!</Button>
            </Nav>

          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default SelectPath;