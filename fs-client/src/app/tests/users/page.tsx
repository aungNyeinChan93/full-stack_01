import UserLists from "@/components/users/UserLists";
import React from "react";

const UsersPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>User Page</h3>
        <section>
          <UserLists />
        </section>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
