import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const RangeInput = () => {
  const [value, setValue] = useState(0);

  return (
    <RangeSlider
      variant="success"
      value={value}
      onChange={(changeEvent) => setValue(changeEvent.target.value)}
    />
  );
};

export default RangeInput;
