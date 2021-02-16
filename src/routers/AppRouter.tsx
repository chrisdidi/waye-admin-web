import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

interface IProps {
  isLoggedIn: boolean | null;
}

const LoggedInRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

const LoggedOutRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth} />
    </Switch>
  );
};
const AppRouter: React.FC<IProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};

export default AppRouter;
