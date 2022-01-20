import { Routes, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import NewSlip from "../components/NewSlip";
import NavBar from "./NavBar";
import Preview from "../components/Preview/Preview";

export default function Pages() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="generate" element={<NewSlip />} />
        <Route path="preview" element={<Preview />} />
      </Routes>
    </>
  );
}
