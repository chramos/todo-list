import React from "react";
import { useTasks } from "../../contexts/task-provider";
import Button from "../button";
import Icon from "../icon";

const RemoveTaskButton = ({ task }) => {
  const { removeTask } = useTasks();

  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={() => {
        if (
          window.confirm(`Você realmente deseja remover a tarefa ${task.name}?`)
        ) {
          removeTask(task.id);
        }
      }}
    >
      <Icon width={16} height={16} color="#fff" name="trashIcon" />
    </Button>
  );
};

export default RemoveTaskButton;
