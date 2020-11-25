import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App h-screen flex overflow-hidden bg-gray-100">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
