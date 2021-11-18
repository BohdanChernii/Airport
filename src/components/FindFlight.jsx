import React, { useState, useEffect } from "react";
import history from "./History";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindFlight = ({ search, input, handleChange }) => {
  return (
    <section className="Flight">
      <div className="findFlight">
        <h2 className="findFlight__title">ПОШУК РЕЙСУ</h2>
        <form className="findFlight__form" onSubmit={search}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          <input
            type="text"
            className="findFlight__form-input"
            placeholder="Номер рейсу або місто"
            value={input}
            onChange={handleChange}
          />

          <button type="submit" className="findFlight__form-btn">
            Знайти
          </button>
        </form>
      </div>
    </section>
  );
};
export default FindFlight;
