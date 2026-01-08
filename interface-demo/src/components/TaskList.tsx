import React from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
    return (
        <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none' 
            }}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
