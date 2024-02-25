import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="px-2 py-1 border border-gray-300 rounded mr-2 text-black w-100"
      />
      <button type="submit" className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
