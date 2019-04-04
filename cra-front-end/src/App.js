import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";

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
      <>
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/">Users</NavLink>
        </header>
        <main>
          <AppWrapper>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={Users} />
          </AppWrapper>
        </main>
      </>
    );
  }
}

const Home = () => {
  return <h1>Home</h1>
}

export default App;
