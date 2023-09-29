import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// class App extends React.Component {
//   // Constructor is the first to get called
//   constructor(props) {
//     // super is called as reference to the parent constructor
//     super(props);

//    THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
//     TO THIS STATE
//     this.state = { lat: null, long: null, errormessage: "" };

//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // we call setState obj to update our state
//         this.setState({ lat: position.coords.latitude });
//         this.setState({ long: position.coords.longitude });
//       },
//       (err) => {
//         this.setState({ errormessage: err.message });
//       }
//     );
//   }
//   componentDidMount(){
//     console.log('My component was rendered to the screen')
//   }
//   componentDidUpdate(){
//     console.log('My component was just updated - it rerendered')
//   }

//   // Render() method is needed to be define
//   render() {
//     if (this.state.errormessage && !this.state.lat && !this.state.long) {
//       return <div>{this.state.errormessage}</div>;
//     }

//     if (!this.state.errormessage && this.state.lat && this.state.long) {
//       return (
//         <div>
//           long: {this.state.long}<br />
//           lat:{this.state.lat}
//         </div>
//       );
//     }

//     return <div> Loading!</div>;
//   }
// }

class App extends React.Component {

  state = { lat: null, log: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
           this.setState({ lat: position.coords.latitude })
        this.setState({ log: position.coords.longitude })
      },
     
      (err) => this.setState({errorMessage:err.message})
    );
  }

  render() {
    
    if(this.state.errorMessage){
      return <div><p>Error:{this.state.errorMessage}</p></div>;
    }

    if(!this.state.errorMessage && this.state.log) {
      return  <div> <SeasonDisplay lat= {this.state.lat} log = {this.state.log} /> </div>
    }
  
            return <div> <p>Loading......</p></div>;

    
  } 
}

ReactDOM.render(<App />, document.querySelector("#root"));
