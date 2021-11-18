import { FLIGHTS_RECEIVED } from "./flights.actions";
const initialState = {
  flights: [],
};
export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_RECEIVED: {
      return {
        ...state,
        flights: action.payload.flights,
      };
    }
    default:
      return state;
  }
};
