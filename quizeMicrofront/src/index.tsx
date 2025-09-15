import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/store";
import App from "./App";

const noop = () => {};

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App onQuizeDone={noop} onAnswer={noop} />
  </Provider>,
);
