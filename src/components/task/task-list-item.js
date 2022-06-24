import EditTaskButton from "./edit-task-button";
import Flex from "../flex";
import RemoveTaskButton from "./remove-task-button";
import Row from "../row";

const TaskListItem = ({ task }) => {
  return (
    <Row
      as="li"
      backgroundColor="#ffffff1a"
      padding="1rem"
      alignItems="center"
      borderRadius={8}
      color="#fff"
      flexGrow={1}
    >
      <Flex flex={1}>{task.name}</Flex>
      <Row gap="0.5rem">
        <EditTaskButton task={task} />
        <RemoveTaskButton task={task} />
      </Row>
    </Row>
  );
};

export default TaskListItem;
