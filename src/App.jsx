import { useEffect, useState } from "react";
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

  const [tasks, setTasks] = useState(() => {
    const save = window.localStorage.getItem("TASK_ITEMS");
    try {
      const parsed = JSON.parse(save);
      return parsed ?? DEFAULT_TASK;
    } catch {
      return DEFAULT_TASK;
    }
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.localStorage.setItem("TASK_ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title) => {
    if (!title.trim()) return;

    if (title) {
      let updatedTasks = [
        ...tasks,
        { id: Date.now(), title: title.trim(), status: false },
      ];
      setTasks(updatedTasks);
    }
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

  const handleEditedTask = (id, newTitle) => {
    if (!newTitle.trim()) return;

    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          title: newTitle.trim(),
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTask);
  };

  let filteredTasks = tasks;

  if (filter === "Active") {
    if (tasks) filteredTasks = tasks.filter((task) => !task.status);
  } else if (filter === "Completed") {
    if (tasks) filteredTasks = tasks.filter((task) => task.status);
  }

  return (
    <>
      <h1 className="text-2xl text-center font-semibold mt-1 mb-2">Todo App</h1>
      <div className=" sm:w-3/4 xl:w-1/2  bg-purple-100 p-5 rounded-md mx-10 sm:mx-auto">
        <Filters setFilter={setFilter} filter={filter} />
        <AddTask onAdd={handleAddTask} />
        <TaskList
          onDelete={handleDeleteItem}
          tasks={filteredTasks}
          onToggle={handleToggle}
          filter={filter}
          onEdit={handleEditedTask}
        />
      </div>
    </>
  );
}

export default App;
