// import Button from "react-bootstrap/Button";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import SplitButton from "react-bootstrap/SplitButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

// import React from "react";

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
// 					<Dropdown.Item eventKey="2">Intermediate/Diffcult</Dropdown.Item>
// 					<Dropdown.Item eventKey="3">Diffcult</Dropdown.Item>
// 					<Dropdown.Item eventKey="3">Very Diffcult</Dropdown.Item>
// 				</DropdownType>
// 			))}
// 		</div>
// 	);
// }

import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function GetDifficulty() {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <div>
      <DropdownButton
        alignRight
        title="Dropdown right"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
        <Dropdown.Item eventKey="Easy/Intermediate">Easy/Intermediate</Dropdown.Item>
        <Dropdown.Item eventKey="Intermediate">Intermediate</Dropdown.Item>
        <Dropdown.Item eventKey="Intermediate/Diffcult">Intermediate/Diffcult</Dropdown.Item>
        <Dropdown.Item eventKey="Diffcult">Diffcult</Dropdown.Item>
        <Dropdown.Item eventKey="Very Diffcult">Very Diffcult</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
}

export default GetDifficulty;
