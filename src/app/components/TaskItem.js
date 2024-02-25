import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 mx-5"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
