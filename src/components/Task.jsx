import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function Task({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  return (
    <li className="flex justify-between bg-purple-50  p-1 rounded-md ">
      {!isEditing ? (
        <>
          <div>
            <span
              onClick={() => onToggle(task.id)}
              className="mr-2 cursor-pointer"
            >
              {task.status ? "✓" : "○"}
            </span>
            {task.title}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="hover:text-green-500 cursor-pointer text-xl"
              onClick={() => {

                

                setEditedValue(task.title);
                setIsEditing(true);
              }}
            >
              <CiEdit />
            </span>

            <span
              onClick={() => onDelete(task.id)}
              className="text-red-500 text-xl mr-2 cursor-pointer hover:text-red-700"
            >
              <MdDelete />
            </span>
          </div>
        </>
      ) : (
        <>
          <input
            onChange={(e) => setEditedValue(e.target.value)}
            className="w-full"
            type="text"
            value={editedValue}
          />
          <span
            onClick={() => {
              onEdit(task.id, editedValue);
              setIsEditing(false);
            }}
            className="text-red-500 text-xl mx-2"
          >
            <MdSaveAlt />
          </span>
        </>
      )}
    </li>
  );
}

export default Task;
