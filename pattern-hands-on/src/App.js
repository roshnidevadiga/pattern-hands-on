import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";

import Navigation from "./common/Navigation";

function App() {
    return (
        <div>
            <Navigation />
            <Switch>
                {Routes.map(route => (
                    <Route exact path={route.path} key={route.path}>
                        <route.component />
                    </Route>
                ))}
            </Switch>
        </div>
    );
}

export default App;
