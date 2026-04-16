import Task from "./Task";

const EMPTY_MESSAGES = {
  Active: "No active tasks — enjoy the break! 🎉",
  Completed: "No completed tasks yet, get to work! 💪",
  All: "No tasks found. Add one to get started!",
};

function TaskList({ tasks, onDelete, onToggle, filter, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center mt-10 font-semibold">
        {EMPTY_MESSAGES[filter]}
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-2 mt-5">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
