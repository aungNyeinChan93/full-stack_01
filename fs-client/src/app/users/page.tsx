import UserCreate from "@/components/users/UserCreate";
import Users from "@/components/users/Users";
import React from "react";

const UsersPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>Users Page</h3>
        <UserCreate />
        <Users />
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
