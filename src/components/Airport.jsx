import React, { useState, useEffect } from "react";
import Header from "./Header";
import FindFlight from "./FindFlight";
import FlightsSwitch from "./FlightsSwitch";
import Arrivals from "./Arrivals";
import Departures from "./Departures";
import History from "./History";
import { allFlights } from "../flights/flights.selectors.js";
import { fetchFlightsData } from "../flights/flights.actions.js";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Airport({ flights, fetchFlightsData }) {
  const { arrival, departure } = flights;
  useEffect(() => fetchFlightsData(), []);

  const [arrivals, setArrivals] = useState(arrival);
  const [departures, setDepartures] = useState(departure);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let searchParam = params.get("search");
    setSearch(searchParam ? searchParam : "");
  }, []);
  useEffect(() => {
    setArrivals(arrival);
    setDepartures(departure);
  }, [flights]);

  if (!flights.arrival || !flights.departure) {
    return null;
  }

  const handleChange = (e) => setInput(e.target.value);

  const searchPlanes = (e) => {
    e.preventDefault();

    const filterArrivals = arrival.filter((item) =>
      item["planeTypeID.code"].toLowerCase().includes(input.toLowerCase())
    );
    setArrivals(filterArrivals);

    const filterDepartures = departure.filter((item) =>
      item["planeTypeID.code"].toLowerCase().includes(input.toLowerCase())
    );
    setDepartures(filterDepartures);

    setSearch(input);
    History.push("search?=" + input);
    setInput("");
  };

  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <FindFlight
          search={searchPlanes}
          handleChange={handleChange}
          input={input}
        />
        <FlightsSwitch input={input} />
        <Routes>
          <Route exact path="/" element={null} />
          <Route
            exact
            path="/departures"
            element={
              <Departures
                input={input}
                departure={departures}
                setInput={setInput}
              />
            }
          />
          <Route
            path="/arrivals"
            element={<Arrivals input={input} arrival={arrivals} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const mapState = (state) => {
  return {
    flights: allFlights(state),
  };
};
const mapDispatch = {
  fetchFlightsData: fetchFlightsData,
};
export default connect(mapState, mapDispatch)(Airport);
