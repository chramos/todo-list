import React from "react";
import { useTasks } from "../../contexts/task-provider";
import Button from "../button";
import Icon from "../icon";

const EditTaskButton = ({ task }) => {
  const { editTask } = useTasks();
  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={() => {
        const newName = window.prompt(`Editar task ${task.name}`, task.name);
        if (newName) {
          editTask(task.id, newName);
        }
      }}
    >
      <Icon name="pencil" color="#fff" />
    </Button>
  );
};

export default EditTaskButton;
