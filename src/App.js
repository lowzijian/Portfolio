import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resume from "./view/Resume";
import Aboutme from "./view/AboutMe";
import Navbar from "./components/Navbar";

const routes = [
  { path: "/Portfolio/", Interface: <Aboutme />, isExact: true },
  { path: "/Portfolio/resume", Interface: <Resume /> },
  { path: "/Portfolio/aboutMe", Interface: <Aboutme /> },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
          {routes.map(({ path, Interface, isExact }, index) => (
            <Route key={"route-" + index} exact={isExact} path={path}>
              {Interface}
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
