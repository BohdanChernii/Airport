import React, { useEffect } from "react";
import { setTerminalColor } from "../prepareData.js";
import moment from "moment";
const Arrivals = ({ arrival }) => {
  if (!arrival || arrival.length === 0) {
    return <p className="not-found">Прильотів не знайдено</p>;
  }
  setTerminalColor(arrival);
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
          {arrival
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
                  {item["airportFromID.city"]}
                </td>
                <td className="table__row-item">
                  Прилетів о {moment(item.timeTakeofFact).format("h:mm")}
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
export default Arrivals;
