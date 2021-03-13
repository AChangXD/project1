import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Task from "./components/Task.js";
import AddTask from "./components/AddTask.js";
const data = require("./data/data.json");

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(data.reminderList);
  var currentID = tasks.length;

  //Delete tasks
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Add tasks
  const addTask = (task) => {
    debugger;
    console.log(task);
    currentID++;
    const newTask = { id: currentID, ...task };
    setTasks([...tasks, newTask]);
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
      <Header
        title="Reminders"
        showAddTask={showAddTask}
        setShowAddTask={() => setShowAddTask(!showAddTask)}
      ></Header>
      {showAddTask && <AddTask addTask={(task) => addTask(task)}></AddTask>}
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
