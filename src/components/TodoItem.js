import React, { useState } from 'react';

const TodoItem = ({ task, deleteTask, editTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span 
            style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
          <button onClick={toggleComplete}>
            {task.completed ? 'Unmark' : 'Mark Complete'}
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
