import React, { useState, useEffect } from "react";
import axios from "axios";
import requiresAuth from '../auth/requiresAuth'
import styled from 'styled-components'

const UsersWrapper = styled.div `
border: 1px solid black;
padding: 30px;
border-radius: 10px;

ul {
  margin: 0;
  padding: 0;
}

li {
  background-color: #ffcdaa
  margin: 20px;
  padding: 10px;
  border-radius: 2px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 7px #898989;

}
`

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const endpoint  = `/users`
      const res = await axios.get(endpoint);
      console.log(res);
      setUsers(res.data);
      console.log("useEffect ran");
    };
    fetchUsers();
  }, []);

  return users.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <UsersWrapper>
      <h2>List of Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
    </UsersWrapper>
  );
};

export default requiresAuth(Users);
