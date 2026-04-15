import Task from "./Task";

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center mt-10 font-semibold">
        No work today. Rest! ☕
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
        />
      ))}
    </ul>
  );
}

export default TaskList;
