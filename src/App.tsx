import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import GeneralConditions from "./pages/GeneralConditions";
import ScrollToHash from "./components/ScrollToHash";
import Header from "./components/Header";

export default function App() {
  return (
    <>
     <ScrollToHash />
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general-conditions" element={<GeneralConditions />} />
      </Routes>
    </>
  );
}