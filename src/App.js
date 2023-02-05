import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AuthContextProvider } from "./context/Auth";
import ProfilePage from "./Pages/Profile/Account";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./Pages/ProtectdRoutes";
// import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
