import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
const App = () => {
  return (
    <div data-theme="wireframe">
      <Routes>
        {routes.map(({ key, path, Element }) => (
          <Route key={key} path={path} element={Element} />
        ))}
      </Routes>
    </div>
  );
};
export default App;
