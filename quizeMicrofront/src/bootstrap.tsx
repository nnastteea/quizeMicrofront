import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import App from "./App";

const RemoteApp = (props: any) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);

export default RemoteApp;
