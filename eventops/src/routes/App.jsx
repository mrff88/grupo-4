import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import CreateEvent from '../pages/user/CreateEvent';
import Home from '../pages/Home';
import ManageEvents from '../pages/user/ManageEvents';
import Tickets from '../pages/user/Tickets';
import UserProfile from '../pages/user/UserProfile';
import './App.scss';
import { SesionContext } from '../utils/SesionContext';
import { useContext } from 'react';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import PasswordRecovery from '../pages/PasswordRecovery';
import ManageEventsApproval from '../pages/admin/ManageEventsApproval';
import misRutas from '../utils/routesNames';
import ManageBanner from '../pages/admin/ManageBanner';
import RequireAuth from '../utils/RequireAuth';
import HideIfLogged from '../utils/HideIfLogged';

function App() {
  const { sesion } = useContext(SesionContext);
  const route = useLocation();

  return (
    <div className="eventops d-flex flex-column">
      {misRutas.includes(route.pathname) ? null : <Nav />}
      <Routes>
        {/* home */}
        <Route
          exact
          path="/"
          element={
            sesion?.type === 'admin' ? <ManageEventsApproval /> : <Home />
          }
        />

        {/* admin */}
        <Route
          exact
          path="/gestionar-banner"
          element={
            <RequireAuth type="admin">
              <ManageBanner />
            </RequireAuth>
          }
        />

        {/* user */}
        <Route
          exact
          path="/crear-evento"
          element={
            <RequireAuth type="user">
              <CreateEvent />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/perfil"
          element={
            <RequireAuth type="user">
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/mis-entradas"
          element={
            <RequireAuth type="user">
              <Tickets />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/mis-eventos"
          element={
            <RequireAuth type="user">
              <ManageEvents />
            </RequireAuth>
          }
        />

        {/* guest */}
        <Route
          exact
          path="/iniciar-sesion"
          element={
            <HideIfLogged>
              <LogIn />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/registrarse"
          element={
            <HideIfLogged>
              <Register />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/recuperar-password"
          element={
            <HideIfLogged>
              <PasswordRecovery />
            </HideIfLogged>
          }
        />

        {/* all */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      {misRutas.includes(route.pathname) ? null : <Footer />}
    </div>
  );
}

export default App;