import React from "react";
import Form from "../form";
import Row from "../row";
import Button from "../button";
import Input from "../input";
import { useTasks } from "../../contexts/task-provider";
import Icon from "../icon";

const TaskForm = () => {
  const [task, setTask] = React.useState("");
  const { addNewTask } = useTasks();

  return (
    <Form
      onSubmit={() => {
        if (task) {
          addNewTask(task.trim());
          setTask("");
        }
      }}
    >
      <Row backgroundColor="#a8eb12" width={640} borderRadius={8}>
        <Row padding="0.5rem" flex={1} gap="1rem">
          <Input
            placeholder="Digite uma tarefa"
            value={task}
            onChange={setTask}
          />
          <Button>
            <Icon width={24} height={24} color="#fff" />
          </Button>
        </Row>
      </Row>
    </Form>
  );
};

export default TaskForm;
