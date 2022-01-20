import { Routes, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import NewSlip from "../components/NewSlip";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="generate" element={<NewSlip />} />
    </Routes>
  );
}
