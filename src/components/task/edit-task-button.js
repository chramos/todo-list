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
        editTask(task.id, newName);
      }}
    >
      <Icon width={16} height={16} color="#fff" name="pencilIcon" />
    </Button>
  );
};

export default EditTaskButton;
