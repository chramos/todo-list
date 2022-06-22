import React from "react";

const TASKS_KEY = "tasks";

const TaskContext = React.createContext({});

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  const handleTasksChange = (payload) => {
    setTasks(payload);
    localStorage.setItem(TASKS_KEY, JSON.stringify(payload));
  };

  const addNewTask = (taskName) => {
    const taskId = Date.now();
    const data = [...tasks, { id: taskId, name: taskName }];
    handleTasksChange(data);
  };

  const removeTask = (task) => {
    const data = tasks.filter((savedTask) => savedTask.id !== task.id);
    handleTasksChange(data);
  };

  const editTask = (task) => {
    const data = tasks.map((savedTask) => {
      if (savedTask.id === task.id) {
        return { ...savedTask, name: task.name };
      }
      return savedTask;
    });
    handleTasksChange(data);
  };

  React.useEffect(() => {
    const savedTasks = localStorage.getItem(TASKS_KEY);
    const data = JSON.parse(savedTasks);
    setTasks(data ?? []);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addNewTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => React.useContext(TaskContext);
