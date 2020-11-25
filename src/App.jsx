import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import ConfigsList from "./components/configs/ConfigsList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App h-screen flex overflow-hidden bg-gray-100">
        <Sidebar />
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Activity Log
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <Route
                    exact
                    path="/configurations"
                    component={ConfigsList}
                  />
                </div>
              </div>
            </div>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
