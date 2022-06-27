import EditTaskButton from "./edit-task-button";
import Flex from "../flex";
import RemoveTaskButton from "./remove-task-button";
import Row from "../row";
import { useTasks } from "../../contexts/task-provider";

const TaskListItem = ({ task }) => {
  const { toggleTaskStatus } = useTasks();
  return (
    <Row
      as="li"
      backgroundColor={task.completed ? "blue" : "#ffffff1a"}
      alignItems="center"
      borderRadius={8}
      color="#fff"
      flexGrow={1}
    >
      <label
        htmlFor={`task-${task.id}`}
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          padding: "1rem",
          gap: ".75rem",
        }}
      >
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={task.completed}
          onChange={() => toggleTaskStatus(task.id)}
        />
        <Flex flex={1}>{task.name}</Flex>
        <Row gap="0.5rem">
          <EditTaskButton task={task} />
          <RemoveTaskButton task={task} />
        </Row>
      </label>
    </Row>
  );
};

export default TaskListItem;
