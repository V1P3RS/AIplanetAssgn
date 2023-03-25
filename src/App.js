import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FavouriteSubmissions from "./pages/FavouriteSubmissions";
import "./App.css";
import UploadSub from "./pages/UpoadSub";
import OpenUP from "./pages/OpenUP";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/FavouriteSubmissions">
          <FavouriteSubmissions />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/UploadSub">
          <UploadSub />
        </Route>
        <Route exact path="/OpenUP">
          <OpenUP />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
