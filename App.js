import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import MainStack from "./router/MainStack";

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
