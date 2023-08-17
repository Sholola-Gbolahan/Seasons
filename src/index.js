import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // Constructor is the first to get called
  constructor(props) {
    // super is called as reference to the parent constructor
    super(props);

    this.state = { lat: null, long: null, errormessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we call setState obj to update our state
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      (err) => {
        this.setState({ errormessage: err.message });
      }
    );
  }
  componentDidMount(){
    console.log('My component was rendered to the screen')
  }
  componentDidUpdate(){
    console.log('My component was just updated - it rerendered')
  }

  // Render() method is needed to be define
  render() {
    if (this.state.errormessage && !this.state.lat && !this.state.long) {
      return <div>{this.state.errormessage}</div>;
    }

    if (!this.state.errormessage && this.state.lat && this.state.long) {
      return (
        <div>
          long: {this.state.long}<br />
          lat:{this.state.lat}
        </div>
      );
    }

    return <div> Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
