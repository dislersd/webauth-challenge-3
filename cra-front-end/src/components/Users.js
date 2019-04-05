import React, { useState, useEffect } from "react";
import axios from "axios";
import requiresAuth from '../auth/requiresAuth'

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
    <>
      <h2>List of Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
    </>
  );
};

export default requiresAuth(Users);
