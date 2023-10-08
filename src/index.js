import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
// import { Clock, UserForm } from "./Exersice";

// class 
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

  renderContent(){
    if(this.state.errorMessage){
      return <div><p>Error:{this.state.errorMessage}</p></div>;
    }

    if(!this.state.errorMessage && this.state.log) {
      return  <div> <SeasonDisplay lat= {this.state.lat} log = {this.state.log} /> </div>
    }
  
       return <div> <Loader  message="Please accept location request"/> </div>;
  }

  render() {
    return (
      <div className="season-border">
        {this.renderContent()}
        <Clock />
      </div>
    )
        }  
}

ReactDOM.render(<App />, document.querySelector("#root"));
