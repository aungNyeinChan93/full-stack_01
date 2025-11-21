import Tasks from "@/components/tasks/Tasks";
import Link from "next/link";
import React from "react";

const TasksPage = async () => {
  return (
    <React.Fragment>
      <main>
        <div className="flex justify-between px-10 my-4">
          <h3>TasksPage</h3>
          <Link href={"/tasks/create"}>Create Task➕</Link>
        </div>
        <section>
          <Tasks />
        </section>
      </main>
    </React.Fragment>
  );
};

export default TasksPage;
