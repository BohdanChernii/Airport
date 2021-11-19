import React from "react";
import { NavLink } from "react-router-dom";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FlightsSwitch = ({ input }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="departures-btn">
        <NavLink
          to={`/departures?search=${input}`}
          href="/departures"
          activeclassname="active"
          className="departures-link"
        >
          <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
          {` `}Виліт
        </NavLink>
      </li>

      <li className="arrivals-btn">
        <NavLink
          to={`/arrivals?search=${input}`}
          href="/arrivals"
          activeclassname="active"
          className="arrivals-link"
        >
          <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
          {` `}Приліт
        </NavLink>
      </li>
    </ul>
  );
};
export default FlightsSwitch;
