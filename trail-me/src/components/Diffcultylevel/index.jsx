import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/ButtonGroup";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

// function clickedMe(){
//     alert("you clicked me!")
// }

class LevelsDropdown extends Component {
  constructor(props) {
    super();
    this.state = { inputValue: "Pick A Level" };
  }

  componentDidMount() {
    // this.setState({
    //   inputValue: "", // Need to pas a prop
    // });
  }

  handleClick = (e) => {
    console.log("clicked!", e);
    this.setState({
      inputValue: e,
    });

    // if (e == "clicked! Very Diffcult") {
    //   this.componentDidMount();
    // }
  };

  render() {
    return (
      <div className="mb-2">
        <div id="block2">
          <Dropdown
            className="LevelsDropdown"
            onSelect={(e) => this.handleClick(e)}
            inputValue={this.state.inputValue}
          >
            <DropdownToggle variant="success" id="dropdown-basic">
              {this.state.inputValue}
            </DropdownToggle>
            <DropdownMenu variant="success" id="dropdown-levels">
              <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="Easy & Intermediate">
                Easy/Intermediate
              </Dropdown.Item>
              <Dropdown.Item eventKey="Intermediate">
                Intermediate
              </Dropdown.Item>
              <Dropdown.Item eventKey="Intermediate & Diffcult">
                Intermediate/Diffcult
              </Dropdown.Item>
              <Dropdown.Item eventKey="Diffcult">Diffcult</Dropdown.Item>
              <Dropdown.Item eventKey="Very Diffcult">
                Very Diffcult
              </Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default LevelsDropdown;
