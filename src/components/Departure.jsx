import React, { useState, useEffect } from "react";
import moment from "moment";
import { setTerminalColor } from "../prepareData.js";

import { useLocation } from "react-router-dom";
const Departures = ({ departure, arrival }) => {
  let location = useLocation();

  if (
    !departure ||
    departure.length === 0 ||
    !arrival ||
    arrival.length === 0
  ) {
    return <p className="not-found">не знайдено</p>;
  }
  const [flightsType, setFlightsType] = useState(departure);
  useEffect(() => {
    location.pathname === "/arrivals"
      ? setFlightsType(arrival)
      : setFlightsType(departure);
  }, [location]);
  setTerminalColor(flightsType);
  console.log(location);

  return (
    <div className="planes">
      <table className="flights__table">
        <thead className="flights__table-title title">
          <tr className="title__row">
            <th className="title__row-item">Термінал</th>
            <th className="title__row-item">Розклад</th>
            <th className="title__row-item">Напрямок</th>
            <th className="title__row-item">Статус</th>
            <th className="title__row-item">Авіакомпанія</th>
            <th className="title__row-item">Рейс</th>
          </tr>
        </thead>

        <tbody className="table-body table">
          {flightsType
            .filter(
              (item) =>
                moment(item.actual).format("YYYY-MM-DD") ===
                moment(new Date()).format("YYYY-MM-DD")
            )
            .map((item) => (
              <tr className="table__row" key={item.ID}>
                <td
                  className="table__row-item terminal"
                  style={{
                    color: item.color,
                    border: `3px solid ${item.color}`,
                    borderRadius: "50%",
                    textAlign: "center",
                  }}
                >
                  {item.term}
                </td>
                <td className="table__row-item">
                  {moment(item.timeDepShedule).format("h:mm")}
                </td>
                <td className="table__row-item">
                  {item["airportToID.city"] || item["airportFromID.city"]}
                </td>
                <td className="table__row-item">
                  Вилетів о {moment(item.timeTakeofFact).format("h:mm")}
                </td>
                <td className="table__row-item aviacompany">
                  <img
                    className="aviacompany__logo"
                    src={`https://api.iev.aero${item.logo}`}
                    alt=""
                  />
                  <span className="aviacompany__name">
                    {item.airline.ua.name}
                  </span>
                </td>
                <td className="table__row-item code">
                  {item["planeTypeID.code"]}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Departures;
