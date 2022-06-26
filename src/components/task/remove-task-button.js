import React from "react";
import { useTasks } from "../../contexts/task-provider";
import { trash } from "../../utils/icon-path-directory";
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
      <Icon iconPath={trash} width={16} height={16} color="#fff" />
    </Button>
  );
};

export default RemoveTaskButton;
