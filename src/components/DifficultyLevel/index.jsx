import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/ButtonGroup";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

// // function clickedMe(){
// //     alert("you clicked me!")
// // }

// export default function Buttondrop() {
// 	return (
// 		<div className="mb-2">
// 			{[DropdownButton].map((DropdownType, idx) => (
// 				<DropdownType
// 					as={ButtonGroup}
// 					key={idx}
// 					id={`dropdown-button-drop-${idx}`}
// 					size="lg"
// 					title="Pick Your Level"
// 				>
// 					<Dropdown.Item eventKey="1">Easy</Dropdown.Item>
// 					<Dropdown.Item eventKey="2">Easy/Intermediate</Dropdown.Item>
// 					<Dropdown.Item eventKey="2">Intermediate</Dropdown.Item>
// 					<Dropdown.Item eventKey="2">Intermediate/Difficult</Dropdown.Item>
// 					<Dropdown.Item eventKey="3">Difficult</Dropdown.Item>
// 					<Dropdown.Item eventKey="3">Very Difficult</Dropdown.Item>
// 				</DropdownType>
// 			))}
// 		</div>
// 	);
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
    this.props.updateDifficulty(e);
    this.setState({
      inputValue: e,
    });
  };

  render() {
    return (
      <div className="mb-2 select-difficulty">
        <div id="block2">
          <Dropdown
            className="LevelsDropdown"
            onSelect={(e) => this.handleClick(e)}
            inputValue={this.state.inputValue}
          >
            <DropdownToggle id="dropdown-basic">
              {this.state.inputValue}
            </DropdownToggle>
            <DropdownMenu id="dropdown-levels">
              <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="Easy & Intermediate">
                Easy/Intermediate
              </Dropdown.Item>
              <Dropdown.Item eventKey="Intermediate">
                Intermediate
              </Dropdown.Item>
              <Dropdown.Item eventKey="Intermediate & Difficult">
                Intermediate/Difficult
              </Dropdown.Item>
              <Dropdown.Item eventKey="Difficult">Difficult</Dropdown.Item>
              <Dropdown.Item eventKey="Very Difficult">
                Very Difficult
              </Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default LevelsDropdown;
