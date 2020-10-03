// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import { Table } from "react-bootstrap";

// function GetResult() {
// 	const [trail, setTrail] = useState([]);

// 	// "https://api.openweathermap.org/data/2.5/onecall?"+{prop.lat}"&"+ {prop.long} +"&exclude=daily&appid=" +
// 	// process.env.REACT_APP_OPENWEATHER_API_KEY

// 	useEffect(() => {
// 		axios
// 			.get(
// 				"https://www.hikingproject.com/data/get-trails?lat=30.266666&lon=-97.73333&maxDistance=50&key=" +
// 					process.env.REACT_APP_HIKING_PROJECT_API_Key
// 			)
// 			.then((response) => setTrail(response.data.trails));
// 		// .then(() => console.log(setTrail));
// 	}, []);

// 	// axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&exclude=daily&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY)
// 	// .then(response => {
// 	//   console.log(response);
// 	//   setWeather(response);
// 	//   console.log("Weather Info: ");
// 	//   console.log(weather);

// 	// })

// 	return (
// 		// trail
// 		<div>{trail}</div>
// 	);
// }

// export default GetResult;
