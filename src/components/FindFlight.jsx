import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindFlight = ({ search, input, handleChange }) => {
  return (
    <section className="flight">
      <div className="flight__find">
        <h2 className="flight__find-title">ПОШУК РЕЙСУ</h2>
        <form className="flight__find-form form" onSubmit={search}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          <input
            type="text"
            className="form-input"
            placeholder="Номер рейсу або місто"
            value={input}
            onChange={handleChange}
          />

          <button type="submit" className="form-btn">
            Знайти
          </button>
        </form>
      </div>
    </section>
  );
};
export default FindFlight;
