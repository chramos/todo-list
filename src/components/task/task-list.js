import { useTasks } from "../../contexts/task-provider";
import Col from "../col";
import TaskListItem from "./task-list-item";

const TaskList = ({}) => {
  const { tasks } = useTasks();
  return (
    <Col as="ul" gap="1rem">
      {tasks.map((task) => (
        <TaskListItem task={task} key={task.id} />
      ))}
    </Col>
  );
};

export default TaskList;
