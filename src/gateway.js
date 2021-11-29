import moment from "moment";
const baseUrl = "https://api.iev.aero/api/flights";

const today = moment(new Date()).format("DD-MM-YYYY");

export const fetchFlights = () =>
  fetch(`${baseUrl}/${today}`).then((response) => response.json());
console.log(fetchFlights());
