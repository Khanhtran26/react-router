import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./router";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
				  <Menu></Menu>
            </div>
          </nav>
          <Switch>
              {this.showRoute(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showRoute = (routes) =>{
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index)=>{
          return (
            <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
          )
      })
    }
    return result;
  }
}
export default App;
