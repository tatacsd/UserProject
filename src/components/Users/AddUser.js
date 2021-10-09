import React from "react";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={AddUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" name="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
