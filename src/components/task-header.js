import React from "react";
import { useTasks } from "../contexts/task-provider";

const TaskHeader = ({}) => {
  const { tasks } = useTasks();
  return (
    <h1
      style={{
        fontSize: 24,
        textTransform: "uppercase",
        textAlign: "center",
      }}
    >
      Minha lista de tarefas ({tasks?.length})
    </h1>
  );
};

export default TaskHeader;
