import React from 'react'

const Loader = (props) => {
  return (
    <div class="ui active dimmer">
         <div class="ui big text loader"> {props.message}</div>
    </div>
  )
}


//  This will provide a default props to spinner if no props is used when it's called
Loader.defaultProps = {
    message: "Loading......"

}

export default Loader