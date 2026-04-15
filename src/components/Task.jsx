import { MdDelete } from "react-icons/md";

function Task({ task, onDelete, onToggle }) {
  return (
    <li className="flex justify-between bg-purple-200  p-1 rounded-md ">
      <div>
        <span onClick={() => onToggle(task.id)} className="mr-2 cursor-pointer">
          {task.status ? "✓" : "○"}
        </span>
        {task.title}
      </div>

      <span
        onClick={() => onDelete(task.id)}
        className="text-red-500 text-xl mr-2"
      >
        <MdDelete />
      </span>
    </li>
  );
}

export default Task;
