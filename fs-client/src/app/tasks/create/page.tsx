import TaskCreate from "@/components/tasks/TaskCreate";
import React from "react";

const TaskCreatePage = async () => {
  return (
    <React.Fragment>
      <main>
        <TaskCreate />
      </main>
    </React.Fragment>
  );
};

export default TaskCreatePage;
