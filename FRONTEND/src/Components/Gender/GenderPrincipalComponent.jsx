import { Routes, Route } from "react-router-dom";
import { GenderCreate } from "./GenderCreate.jsx";
import { GenderList } from "./GenderList.jsx";
import { GenderUpdate } from "./GenderUpdate";

export const GenderPrincipalComponent = () => {
  return (
    <>
      <h1>Genders component</h1>
      <Routes>
        <Route path="/genders/list" element={<GenderList />} />
        <Route path="/genders/update" element={<GenderUpdate />} />
        <Route path="/genders/create" element={<GenderCreate />} />
      </Routes>
    </>
  );
};
