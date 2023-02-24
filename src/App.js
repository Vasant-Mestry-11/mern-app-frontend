import { Route, Routes, Navigate } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace/NewPlace";
import UserPlaces from "./places/pages/UserPlace/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
import Users from "./user/pages/Users";

const App = () => {
  // Check here if any UI alignment issue
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/:userId/places" element={<UserPlaces />} />
          <Route exact path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
