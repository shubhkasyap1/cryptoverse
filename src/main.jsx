import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./app/store.jsx";
import { BrowserRouter as Route } from "react-router-dom";

import "antd/lib/config-provider";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Route>
    <Provider store={store}>
      <App />
    </Provider>
  </Route>
);
