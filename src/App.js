import { Route, Routes, Navigate } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
