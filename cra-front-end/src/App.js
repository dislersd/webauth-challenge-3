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
    return <AppWrapper>hello</AppWrapper>;
  }
}

export default App;
