import { configureStore } from "@reduxjs/toolkit";
import userprefs from "./userprefs";
import cart from "./cart";
import auth from "./auth";

class StateLoader {
  loadState() {
    try {
      const serializedState = localStorage.getItem("localState");

      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }

  saveState(state) {
    const filteredState = { userprefs: state.userprefs };
    try {
      const serializedState = JSON.stringify(filteredState);
      localStorage.setItem("localState", serializedState);
    } catch (err) {}
  }
}

const stateLoader = new StateLoader();

export const store = configureStore({
  reducer: {
    userprefs,
    cart,
    auth,
  },
  preloadedState: stateLoader.loadState(),
});

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});
