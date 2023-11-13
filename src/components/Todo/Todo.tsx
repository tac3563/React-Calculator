import './Todo.scss';
import { useState } from 'react';

export default function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodos() {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <input
        onKeyDown={(e) => (e.key === 'Enter' ? addTodos() : null)}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        name="add task"
        id=""
        placeholder="add a task..."
      />
      <button onClick={addTodos}>Add Task</button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>X</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
