import React, { useReducer } from "react";
import styled from "styled-components";

const AddProjectForm = styled.form`
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #ffcdaa;
  border-radius: 10px;

  input {
    background-color: transparent;
    border: 0;
    border-bottom: solid 1px #0c1416;
    width: 90%;
    padding-bottom: 4px;
    color: #99999;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 30px;
    font-size: 16px;
  }

  input {
    outline: none;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #2c3e50 inset;
    -webkit-text-fill-color: #fff;
  }

  button {
    border: 0;
    padding: 8px 10%;
    margin: 0 10px;
    border-radius: 2px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: #51f1c1;
    color: rgb(27, 23, 20);
    width: 80%;
    margin: 0 auto;
  }

  button:active {
    outline: none;
  }

  button {
    border: 1px solid #495267;
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
    color: #ffffff;
    background-color: #606c88;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#606c88),
      to(#3f4c6b)
    );
    background-image: -webkit-linear-gradient(top, #606c88, #3f4c6b);
    background-image: -moz-linear-gradient(top, #606c88, #3f4c6b);
    background-image: -ms-linear-gradient(top, #606c88, #3f4c6b);
    background-image: -o-linear-gradient(top, #606c88, #3f4c6b);
    background-image: linear-gradient(to bottom, #606c88, #3f4c6b);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#606c88, endColorstr=#3f4c6b);
    transition: all 0.5s ease;

    &:hover {
      background-color: red;
    }
  }
`;

const Login = props => {
  // using reducer for multiple input value control
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userName: "",
      password: ""
    }
  );

  return (
    <div>
      <AddProjectForm
        onSubmit={e =>
          props.handleSubmit(
            e,
            `${userInput.userName}`,
            `${userInput.password}`
          )
        }
        autoComplete="off"
      >
        <input
          type="text"
          name="userName"
          value={userInput.userName}
          placeholder="Username..."
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userInput.password}
          placeholder="Password..."
          onChange={handleChange}
        />
        <button type="submit" value="add">
          {" "}
          Add{" "}
        </button>
      </AddProjectForm>
    </div>
  );

  function handleChange (event) {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  function handleSubmit (event) {
    event.preventDefault();
  }

};

export default Login;
