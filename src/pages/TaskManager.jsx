import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '../components/Button'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const toggleComplete = id =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  const filtered = tasks.filter(t =>
    filter === 'all' ? true :
    filter === 'active' ? !t.completed : t.completed
  );

  return (
    <div className=''>
      <h1 className="text-2xl mb-4">Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="New task..."
          className="border p-2 rounded w-full"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="space-x-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <Button key={f} variant={filter === f ? 'primary' : 'secondary'} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {filtered.map(task => (
          <li key={task.id} className="flex justify-between items-center border-b pb-1">
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
            <div className="space-x-2">
              <Button variant="secondary" onClick={() => toggleComplete(task.id)}>Toggle</Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
