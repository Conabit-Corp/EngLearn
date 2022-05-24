import React from "react";
// import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { LoginPage } from './pages/login/login.pages';
// import { LoginPage } from './pages/login/login.pages';
// import { RegPage } from "./pages/signPages/registrationPage.pages.jsx";
import { MainPage } from "./pages/mainPage/mainPage.pages";
// import { ProfilePage } from "./pages/profilePage/profilePage.pages";
// import { HomePage } from "./pages/homePage/homePage.pages";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route element={<MainPage />}>
          <Route path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
        </Route> */}
        <Route path="/" element={<div>Какая либо страница приветствия</div>} />
        <Route path="*" element={<div style={{ fontSize: 100 }}>404</div>} />
        <Route path="/login" element={<div className="appContainer"><LoginPage /></div>} />
        {/* <Route path="/registration" element={<div className="appContainer"><RegPage /></div>} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
