import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Signup";
import Rent from "./components/Rent";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  function handleLogout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("metamask_account");
    window.location.reload(true);
  }

  return (
    <Router>
      <div>
        <nav className="bg-slate-100 h-20 flex items-center">
          <Link to="/" className="text-3xl px-16 bg-slate-100 text-black">
            Farming Equipment Renting
          </Link>
          <ul className="flex space-x-6 pr-6 text-lg justify-end w-full bg-slate-100">
            {!localStorage.getItem("loggedIn") && (
              <>
                <li className="bg-slate-100">
                  <Link to="/register" className="bg-slate-100">
                    Register
                  </Link>
                </li>
                <li className="bg-slate-100">
                  <Link to="/login" className="bg-slate-100">
                    Login
                  </Link>
                </li>
              </>
            )}
            {localStorage.getItem("loggedIn") && (
              <>
                {/* <li className="bg-slate-100">
                  <Link to="/connectWallet">Connect Wallet</Link>
                </li> */}
                <li className="bg-slate-100">
                  <Link to="/rent">Rent</Link>
                </li>
                <li className="bg-slate-100">
                  <button type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/rent">
            <Rent />
          </Route>
          <Route exact path="/send">
            <Welcome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
