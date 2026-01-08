"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexTrans = exports.filterUser = exports.squared = exports.isPositive = void 0;
// 1
const isPositive = (n) => n > 0;
exports.isPositive = isPositive;
// 2
const numbers = [1, 2, 3, 4, 5];
const squared = (numbers) => numbers.map(n => n ** 2);
exports.squared = squared;
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];
const filterUser = (users) => users.filter(u => u.age >= 18);
exports.filterUser = filterUser;
const tasks = [
    { id: 1, title: "Learn TS", completed: true },
    { id: 2, title: "Build project", completed: false },
    { id: 3, title: "Deploy", completed: false }
];
const complexTrans = (tasks) => tasks.filter(t => !t.completed).map(t => t.title);
exports.complexTrans = complexTrans;
// Take an array, return a transformed array
// const functionName = (input: InputType[]): OutputType[] => 
//   input.arrayMethod(item => transformation);
// Map tasks to components
// {tasks.map(task => <TaskCard key={task.id} task={task} />)}
// Filter and display
// {tasks.filter(t => !t.completed).map(t => <div>{t.title}</div>)}
// Transform data
// const userNames = users.map(u => u.name);
