import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestControl: 2022001053,
  currentUser: "HPCG Utility",
  currentUnit: "Philippine Coast Guard",
  contract: "192458",
  gasStation: "PETRON ROXAS BLVD",
  approver: "CAPT GLIDE GENE MARY G. SONTILLANOSA PCG",
  approverTitle: "DCS FOR LOGISTICS, CG-4",
  gasType: "Diesel",
  gasIssued: "20",
};

const slice = createSlice({
  name: "userprefs",
  initialState,
  reducers: {
    setUserPrefs: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0];
      state[key] = value;
    },
  },
});

export const { setUserPrefs } = slice.actions;
export default slice.reducer;
