import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import classnames from "classnames";
import style from "./app.scss";
import Navbar from "./components/navbar/Navbar";

import routes from "./routes/routes";

export default function render(store, history) {

  const appStyles = classnames(style.app);

  return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <div className={appStyles}>
            <div>
              <Navbar/>
            </div>
            <div>
              {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} component={route.component} exact={route.exact}/>
                ))
              }
            </div>
          </div>
        </BrowserRouter>
      </Provider>
  );
}