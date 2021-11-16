import React, { useState } from "react";
import Header from "./Header";
import FindFlight from "./FindFlight";
import FlightsSwitch from "./FlightsSwitch";
import Arrivals from "./Arrivals";
import Departures from "./Departures";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Airport({ flights }) {
  if (!flights) {
    return null;
  }
  const { arrival, departure } = flights;
  const [input, setInput] = useState("");
  const [arrivals, setArrivals] = useState(arrival);
  const [departures, setDepartures] = useState(departure);
  const handleChange = (e) => setInput(e.target.value);

  const search = (e) => {
    e.preventDefault();
    const filterArrivals = arrival.filter((item) =>
      item["planeTypeID.code"].toLowerCase().includes(input.toLowerCase())
    );
    setArrivals(filterArrivals);

    const filterDepartures = departure.filter((item) =>
      item["planeTypeID.code"].toLowerCase().includes(input.toLowerCase())
    );
    setDepartures(filterDepartures);
  };

  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <FindFlight input={input} search={search} handleChange={handleChange} />
        <FlightsSwitch />
        <Routes>
          <Route path="/" />
          <Route
            path="/departures"
            element={<Departures input={input} departure={departures} />}
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

export default Airport;
