import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";

function App() {
  const DEFAULT_TASK = [
    { id: 1, title: "Do homework", status: false },
    { id: 2, title: "Buy milk", status: true },
    { id: 3, title: "Make dinner", status: true },
  ];

  const [tasks, setTasks] = useState(DEFAULT_TASK);
  const [filter, setFilter] = useState("All");

  const handleAddTask = (title) => {
    let updatedTasks = [
      ...tasks,
      { id: Date.now(), title: title, status: false },
    ];
    setTasks(updatedTasks);
  };

  const handleDeleteItem = (id) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggle = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: !task.status,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  let filteredTasks = tasks;

  if (filter === "Active") {
    filteredTasks = tasks.filter((task) => !task.status);
  } else if (filter === "Completed") {
    filteredTasks = tasks.filter((task) => task.status);
  }

  return (
    <>
      <h1 className="text-2xl text-center font-semibold mt-1 mb-2">Todo App</h1>
      <div className="w-3/4 mx-auto bg-purple-100 p-5 rounded-md">
        <Filters setFilter={setFilter} filter={filter} />
        <AddTask onAdd={handleAddTask} />
        <TaskList
          onDelete={handleDeleteItem}
          tasks={filteredTasks}
          onToggle={handleToggle}
        />
      </div>
    </>
  );
}

export default App;
