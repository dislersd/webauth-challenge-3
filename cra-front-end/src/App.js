import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Users from "./components/Users";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  a {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    font-family: helvetica, sans-serif;
    padding: 10px 10px 10px 10px;
    text-decoration: none;
    display: inline-block;
    text-shadow: 0px 0px 0 rgba(0, 0, 0, 0.3);
    font-weight: bold;
    color: black;
    background-color: none;
    transition: all 0.2s ease;
    margin: 0 10px;

    &:hover {
      background-color: #79beff;
    }
  }

  .logout {
    border: 0;
    padding: 8px 10%;
    margin: 0 10px;
    border-radius: 2px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    color: rgb(27, 23, 20);
    margin: 0 auto;
  }

  .logout:active {
    outline: none;
  }

  .logout {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    font-family: helvetica, sans-serif;
    padding: 10px 10px 10px 10px;
    text-decoration: none;
    display: inline-block;
    text-shadow: 0px 0px 0 rgba(0, 0, 0, 0.3);
    font-weight: bold;
    color: black;
    background-color: none;
    transition: all 0.5s ease;
    margin: 0 10px;

    &:hover {
      background-color: #ff907a;
    }
  }
`;

const App = props => {
  return (
    <AppWrapper>
      <header>
        <NavLink to="/">Home</NavLink>
        
        <NavLink to="/signup">Sign Up</NavLink>
        
        <NavLink to="/login">Login</NavLink>
        
        <NavLink to="/users">Users</NavLink>
        
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </AppWrapper>
  );

  function logout (props) {
    localStorage.removeItem("token");
  }
};

const Home = () => {
  return <h1>Home</h1>;
};

export default App;
