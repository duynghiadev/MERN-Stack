import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/login"
          render={(props) => <Auth {...props} authRoute="login" />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Auth {...props} authRoute="register" />}
        />
      </Switch>
    </Router>
  );
}

export default App;
