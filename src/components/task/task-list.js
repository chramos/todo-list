import { useTasks } from "../../contexts/task-provider";
import Col from "../col";
import TaskListItem from "./task-list-item";
import sortBy from "lodash/sortBy";

const TaskList = ({}) => {
  const { tasks } = useTasks();
  const sortedTasks = sortBy(tasks, "completed", "asc");

  return (
    <Col as="ul" gap="1rem">
      {sortedTasks.map((task) => (
        <TaskListItem task={task} key={task.id} />
      ))}
    </Col>
  );
};

export default TaskList;
