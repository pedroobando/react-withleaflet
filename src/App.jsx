import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Map1 } from "./Map1";
import { MapServidentJm } from "./MapServidentJm";
export const App = () => {
  return (
    <BrowserRouter>
      <h1>App de mapas</h1>
      <nav className="ui menu" style={{ width: "90%", margin: "0.5rem 2rem" }}>
        <NavLink to="/" className={`${(isActive) => (isActive ? "active" : "")} item`}>
          Princial
        </NavLink>
        <NavLink to="/servidentmj" className={`${(isActive) => (isActive ? "active" : "")} item`}>
          Servident MJ
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Map1 />} />
        <Route path="servidentmj" element={<MapServidentJm />} />
        <Route
          path="*"
          element={
            <h2>
              Epale hermano la direccion que elegite no esta.{" "}
              <NavLink to="/">Volver volver vooolver...</NavLink>
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
