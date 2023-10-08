import React from "react";


// Exercise 1: //
// Converting a function base component into a class base component

class UserForm extends React.Component {

    render(){
        return(
            <div>
                <form>
                    <label>Enter a Username</label>
                    <input type="text" />
                </form>
            </div>
        )
    }
}




//   Exercise 2: //
//  Updateing a Component with state 
//  This exercise is all about getting time update and updating state to have the latest time to display it.

class Clock extends React.Component{

        state = { time: '' };

        componentDidMount(){
            setInterval(() => { 
                let currentTime = new Date().toLocaleTimeString()
                this.setState({time: currentTime})
            }, 1000);
            
        }
      

        render(){
            return(<div> <h1> Current Time is: { this.state.time}</h1> </div>)
        }

        

}


export {UserForm, Clock}