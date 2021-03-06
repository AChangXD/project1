import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Task from "./components/Task.js";
const data = require("./data/data.json");

function App() {
  const [tasks, setTasks] = useState(data.reminderList);
  const onDelete = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
    // debugger;
  };
  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Reminders"></Header>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          message={task.message}
          title={task.title}
          onDelete={() => onDelete(task.id)}
          reminder={task.reminder}
          onToggle={() => onToggle(task.id)}
        ></Task>
      ))}
    </div>
  );
}

export default App;
