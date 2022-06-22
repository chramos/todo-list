import React from "react";
import { useTasks } from "../contexts/task-provider";
import Button from "./button";
import Separator from "./separator";
import TaskHeader from "./task-header";

const Dashboard = ({}) => {
  const [editingTask, setEditingTask] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");

  const { tasks, addNewTask, editTask, removeTask } = useTasks();

  React.useEffect(() => {
    setInputValue(editingTask.name);
  }, [editingTask.id]);

  return (
    <div className="container">
      <Separator size={64} />
      <TaskHeader />
      <Separator />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (editingTask.id) {
            editTask({ ...editingTask, name: inputValue });
          } else {
            addNewTask(inputValue);
          }
          setEditingTask({});
          setInputValue("");
        }}
      >
        <input
          placeholder="Digite uma tarefa"
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #eee",
            fontSize: 18,
          }}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </form>
      <Separator />
      <div
        style={{
          background: "#fff",
          padding: 16,
          borderRadius: 8,
          border: "1px solid #eee",
          width: "100%",
        }}
      >
        {tasks.length ? (
          <ul>
            {tasks.map((task, index) => {
              const id = `task-${index}`;
              const isLastTask = tasks.length - 1 === index;
              return (
                <React.Fragment key={id}>
                  <li style={{ display: "flex" }}>
                    <input type="checkbox" id={id} />
                    <Separator direction="horizontal" />
                    <label htmlFor={id} style={{ flexGrow: 1 }}>
                      {task.name}
                    </label>
                    <Separator direction="horizontal" />
                    <Button
                      onClick={() => {
                        setEditingTask(task);
                      }}
                    >
                      Editar
                    </Button>
                    <Separator direction="horizontal" size={8} />
                    <Button
                      intent="danger"
                      onClick={() => {
                        removeTask(task);
                      }}
                    >
                      Remover
                    </Button>
                  </li>
                  {isLastTask ? null : (
                    <React.Fragment>
                      <Separator size={16} />
                      <li
                        style={{
                          height: 1,
                          backgroundColor: "#eee",
                        }}
                      ></li>
                      <Separator size={16} />
                    </React.Fragment>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        ) : (
          <p>Você não tem tarefas cadastradas</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
