import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9 ){
    // --------------------------------------------------------------------------------------------------- //
       // This is a javascript ternary expression
   return  lat > 0  ? 'summer' : 'winter';
       // This expression is saying if lat is > 0 is should return summer and if it's less than o is should return 'winter'
      //  If we are in the summer month and we are in the Northan atmoshere return summer other wise retuen winter 
    // ---------------------------------------------------------------------------------------------------- //
  }
  else {
    return lat > 0 ? 'winter' : 'summer'
  }

}


const SeasonDisplay = (props) => {

  const season = getSeason(props.lat, new Date().getMonth())
  const text =  season === 'winter' ? "Burr, it's chilly" : "Let hit the beach";
  const icon =   season === 'winter' ? "snowflake" : "sun";
  return (
    <div>
      <i className={ `${icon} icon`}/>
       <h1>{text}</h1> 
       <i className={ `${icon} icon`}/>
    </div>
  )
}

export default SeasonDisplay 