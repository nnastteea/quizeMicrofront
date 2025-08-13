import { configureStore } from "@reduxjs/toolkit";

import quizeReducer from "./quizeSlice";

export default configureStore({
  reducer: {
    quize: quizeReducer,
  },
});
