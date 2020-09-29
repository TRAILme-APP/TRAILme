import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import React from "react";

// function clickedMe(){
//     alert("you clicked me!")
// }

export default function Buttondrop() {
	return (
		<div className="mb-2">
			{[DropdownButton].map((DropdownType, idx) => (
				<DropdownType
					as={ButtonGroup}
					key={idx}
					id={`dropdown-button-drop-${idx}`}
					size="lg"
					title="Pick Your Level"
				>
					<Dropdown.Item eventKey="1">Easy</Dropdown.Item>
					<Dropdown.Item eventKey="2">Easy/Intermediate</Dropdown.Item>
					<Dropdown.Item eventKey="2">Intermediate</Dropdown.Item>
					<Dropdown.Item eventKey="2">Intermediate/Diffcult</Dropdown.Item>
					<Dropdown.Item eventKey="3">Diffcult</Dropdown.Item>
					<Dropdown.Item eventKey="3">Very Diffcult</Dropdown.Item>
				</DropdownType>
			))}
		</div>
	);
}
