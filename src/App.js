import React from "react";
import Col from "./components/col";
import TaskForm from "./components/task/task-form";
import TaskList from "./components/task/task-list";
import TaskProvider from "./contexts/task-provider";

const App = ({}) => {
  return (
    <TaskProvider>
      <Col
        flex={1}
        alignItems="center"
        backgroundImage="linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
        gap="1rem"
        paddingTop="4rem"
      >
        <TaskForm />
        <Col width={640}>
          <TaskList />
        </Col>
      </Col>
    </TaskProvider>
  );
};

export default App;
