import React, { Component } from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Users from "./components/Users";
import SignUp from './components/SignUp'
import Login from "./components/Login";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/signup">Sign Up</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </AppWrapper>
    );
  }
}

const Home = () => {
  return <h1>Home</h1>;
};

export default App;
