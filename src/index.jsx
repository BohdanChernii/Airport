import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Airport from "./components/Airport";
import { fetchFlights } from "./gateway";
console.log(fetchFlights());
const root = document.querySelector("#root");
class App extends React.Component {
  state = {
    flights: null,
  };
  componentDidMount() {
    this.flights();
  }
  flights = () => {
    fetchFlights().then((flightsData) =>
      this.setState({
        flights: flightsData.body,
      })
    );
  };
  render() {
    return <Airport flights={this.state.flights} />;
  }
}
ReactDOM.render(<App />, root);
