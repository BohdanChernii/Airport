import { fetchFlights } from "../gateway";
export const FLIGHTS_RECEIVED = "FLIGHTS_RECEIVED";
export const flightsDataReceived = (flights) => {
  return {
    type: FLIGHTS_RECEIVED,
    payload: {
      flights,
    },
  };
};
export const fetchFlightsData = () => {
  return function (dispatch) {
    fetchFlights().then((flights) => {
      dispatch(flightsDataReceived(flights.body));
    });
  };
};
