import React, {useState} from "react";
// import UserLocation from "../UserLocation";
import Diffcultylevel from "../Diffcultylevel";
import { Container, Row, Col, Button } from "react-bootstrap";

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
    <div className="selectPath">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Diffcultylevel 
            onchange={handleInputChange}
            />
          </Col>
          <Col sm={12}>
            <Button>Let's Go!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SelectPath;