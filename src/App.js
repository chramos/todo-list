import React from "react";
import Dashboard from "./components/dashboard";
import TaskProvider from "./contexts/task-provider";
import "./style.css";

const App = ({}) => {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
};

export default App;
