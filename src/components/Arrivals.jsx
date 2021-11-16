import React from "react";

import moment from "moment";
const Arrivals = ({ arrival }) => {
  if (arrival.length === 0) {
    return <p>Not Found</p>;
  }
  return (
    <div className="planes">
      <table className="flights__table">
        <thead>
          <tr className="flights__table-title title">
            <th className="title-item">Термінал</th>
            <th className="title-item">Розклад</th>
            <th className="title-item">Напрямок</th>
            <th className="title-item">Статус</th>
            <th className="title-item">Авіакомпанія</th>
            <th className="title-item">Рейс</th>
          </tr>
        </thead>
        <tbody>
          {arrival
            .filter(
              (item) =>
                moment(item.actual).format("YYYY-MM-DD") ===
                moment(new Date()).format("YYYY-MM-DD")
            )
            .map((item) => (
              <tr className="table__row" key={item.ID}>
                <td className="table__row-item">{item["term"]}</td>
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
                <td>{item["planeTypeID.code"]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Arrivals;
