import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/projects");
      setUsers(res.data);
      console.log("useEffect ran");
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h2>List of Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.username}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;