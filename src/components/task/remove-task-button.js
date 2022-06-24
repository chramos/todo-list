import React from "react";
import { useTasks } from "../../contexts/task-provider";
import Button from "../button";
import TrashIcon from "../icons/trash-icon";

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
      <TrashIcon width={16} height={16} color="#fff" />
    </Button>
  );
};

export default RemoveTaskButton;
