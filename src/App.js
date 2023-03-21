import { useCallback, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace/UpdatePlace";
import UserPlaces from "./places/pages/UserPlace/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./user/pages/Auth/Auth";
import Users from "./user/pages/Users";

const App = () => {
  // Check here if any UI alignment issue

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <>
        <MainNavigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route exact path="/:userId/places" element={<UserPlaces />} />
            <Route exact path="/places/new" element={<NewPlace />} />
            <Route exact path="/places/:placeId" element={<UpdatePlace />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </>
    </AuthContext.Provider>
  );
};

export default App;
