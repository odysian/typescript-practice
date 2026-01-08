import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn TypeScript", completed: true },
    { id: 2, title: "Learn Interfaces", completed: false },
    { id: 3, title: "Build FAROS", completed: false }
  ]);

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }


  return (
    <div className="App">
      <h1>Interface Demo</h1>
      <TaskList tasks={tasks} onToggle={handleToggle}/>
    </div>
  );
}

export default App;
