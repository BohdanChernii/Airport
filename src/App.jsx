import React, { useEffect } from "react";
import store from "./store";
import Airport from "./components/Airport";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Airport />
    </Provider>
  );
};
export default App;
