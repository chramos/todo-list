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

  const removeTask = (taskId) => {
    const data = tasks.filter((savedTask) => savedTask.id !== taskId);
    handleTasksChange(data);
  };

  const editTask = (taskId, taskName) => {
    const data = tasks.map((savedTask) => {
      if (savedTask.id === taskId) {
        return { ...savedTask, name: taskName };
      }
      return savedTask;
    });
    handleTasksChange(data);
  };

  const toggleTaskStatus = (taskId) => {
    const data = tasks.map((savedTask) =>
      savedTask.id === taskId
        ? { ...savedTask, completed: !savedTask.completed }
        : savedTask
    );
    handleTasksChange(data);
  };

  React.useEffect(() => {
    const savedTasks = localStorage.getItem(TASKS_KEY);
    const data = JSON.parse(savedTasks);
    setTasks(data ?? []);
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, addNewTask, removeTask, editTask, toggleTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export const useTasks = () => React.useContext(TaskContext);
