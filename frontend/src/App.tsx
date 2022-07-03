import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from "./hoc/RequireAuth.hoc";
import { AuthProvider } from "./hoc/AuthProvider.hoc";
import {
  LoginPage,
  RegPage,
  MainPage,
  ProfilePage,
  HomePage,
  CollectionsPage
} from './pages/export.pages';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/home/*"
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
          <Route path="/collections/*"
            element={
              <RequireAuth>
                <CollectionsPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/" element={<div>Какая либо страница приветствия</div>} />
        <Route path="*" element={<div style={{ fontSize: 100 }}>404</div>} />
        <Route path="/login" element={<div className="appContainer"><LoginPage /></div>} />
        <Route path="/registration" element={<div className="appContainer"><RegPage /></div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
