import Tasks from "@/components/tasks/Tasks";
import React from "react";

const TasksPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>TasksPage</h3>
        <section>
          <Tasks />
        </section>
      </main>
    </React.Fragment>
  );
};

export default TasksPage;
