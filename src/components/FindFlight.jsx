import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindFlight = ({ search, handleChange, input }) => {
  return (
    <section className="Flight">
      <div className="findFlight">
        <h2 className="findFlight__title">ПОШУК РЕЙСУ</h2>
        <form className="findFlight__form">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          <input
            type="text"
            className="findFlight__form-input"
            placeholder="Номер рейсу або місто"
            value={input}
            onChange={handleChange}
          />

          <button onClick={search} className="findFlight__form-btn">
            Знайти
          </button>
        </form>
      </div>
    </section>
  );
};
export default FindFlight;
