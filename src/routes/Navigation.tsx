import { NavLink } from "react-router-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
          <nav className="navbar">
            <ul>
              {routes.map(({ to, name }) => {
                return (
                  <li key={name}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component, name }) => {
              return <Route path={path} element={<Component />} key={name}/>;
            })}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Navigation;
