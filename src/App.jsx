import React, { useEffect } from "react";
import store from "./store";
import Airport from "./components/Airport";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  useHistory,
  withRouter,
  Switch,
  useLocation,
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Airport />
      </Provider>
    </BrowserRouter>
  );
};
export default App;
