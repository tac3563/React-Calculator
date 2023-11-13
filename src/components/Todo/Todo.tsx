import './Todo.scss';
import { useState } from 'react';

type Task = string;
type Todos = string[] | [];

export default function Todo() {
  const [task, setTask] = useState<Task>('');
  const [todos, setTodos] = useState<Todos>([]);

  function addTodos() {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  }

  function removeTodo(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <input
        onKeyDown={(e) => e.key === 'Enter' && addTodos()}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        name="add task"
        id="add-task"
        placeholder="add a task..."
      />
      <button onClick={addTodos}>Add Task</button>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
