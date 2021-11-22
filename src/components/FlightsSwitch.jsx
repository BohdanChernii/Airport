import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FlightsSwitch = ({ input }) => {
  return (
    <div className="switchFlights">
      <NavLink
        to={`/departures?search=${input}`}
        href="/departures"
        activeclassname="active"
        className="switchFlights__item switchFlights__item-departure"
      >
        <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
        {` `}Виліт
      </NavLink>

      <NavLink
        to={`/arrivals?search=${input}`}
        href="/arrivals"
        activeclassname="active"
        className="switchFlights__item switchFlights__item-arrival"
      >
        <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
        {` `}Приліт
      </NavLink>
    </div>
  );
};
export default FlightsSwitch;
