import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'


const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')
// Get the directory path of the current ES module


// Path to the JSON file where data will be stored


// Create a lowdb instance with a FileSync adapter
const adapter = new JSONFile(file)
const defaultData = { todos: [] }
const db = new Low(adapter, defaultData)
// Seed initial data if needed
await db.read();

// Function to add a new ToDo
const addTodo = (task) => {
    db.data.todos.push({ task, done: false })
};

// Function to mark a ToDo as done
const markAsDone = (index) => {
    db.data.todos.find({ index }).assign({ done: true });
};

// Function to get all ToDos

     await db.read();


// Add a couple of initial ToDo items
addTodo('Complete assignment');
addTodo('Go for a run');

// Display all ToDos
console.log(db.data.todos);
// console.log(getTodos());

// Mark the first ToDo as done
// markAsDone(0);

// Display the updated ToDo list
console.log('Updated ToDo list:');
// console.log(getTodos());
await db.write()