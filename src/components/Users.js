import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import user from "./user.module.css";

function Users() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <React.Fragment>
    <div className={user.container}>
      <AddUserForm savedUser={addUser} />
      <div className={user.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Users;
