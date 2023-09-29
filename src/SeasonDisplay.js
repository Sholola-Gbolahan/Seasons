import React from "react";
import { BsSnow2, BsFillSunFill } from "react-icons/bs";
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "It's Really Hot Here",
      icon: <BsFillSunFill  size={100} />,
  },
  winter: {
    text: "It's Really Cold Here",
    icon: <BsSnow2 size={100} />,
  },
};

const getSeason = (lat, month) => {

  if (month > 2 && month < 9) {
    // --------------------------------------------------------------------------------------------------- //
    // This is a javascript ternary expression
    return lat > 0 ? "summer" : "winter";
    // This expression is saying if lat is > 0 is should return summer and if it's less than o is should return 'winter'
    //  If we are in the summer month and we are in the Northan atmoshere return summer other wise return winter

    // ---------------------------------------------------------------------------------------------------- //
  } else {

    return lat > 0 ? "winter" : "summer";

  }
  
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
    <div className="icon-left">{icon}</div>
      <h1>{text}</h1>
    <div className="icon-right">{icon}</div>
    </div>
  );
};

export default SeasonDisplay;
