import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, addTask, deleteTask, editTask, toggleComplete }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
            editTask={(newText) => editTask(index, newText)}
            toggleComplete={() => toggleComplete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
