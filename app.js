const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

const tasks = [
  { id: 1, name: 'Milk',          status: 'done'    },
  { id: 2, name: 'Eggs',          status: 'done'    },
  { id: 3, name: 'Bread',         status: 'pending' },
  { id: 4, name: 'Butter',        status: 'pending' },
  { id: 5, name: 'Orange juice',  status: 'pending' },
];

// Route 1: basic info
app.get('/', (req, res) => {
  res.json({
    app:  'CISC 886 Lab 6',
    mode: process.env.MODE || 'local',
    node: process.version,
    host: os.hostname(),
  });
});

// Route 2: tasks grouped by status
// Object.groupBy is only available in Node.js v21+.
// On Node 18 this will throw: TypeError: Object.groupBy is not a function
app.get('/tasks', (req, res) => {
  const grouped = Object.groupBy(tasks, task => task.status);
  res.json(grouped);
});

app.listen(PORT, () => {
  console.log('--------------------------------------------------');
  console.log(`  CISC 886 Lab 6 — App started`);
  console.log(`  Port:  ${PORT}`);
  console.log(`  Mode:  ${process.env.MODE || 'local'}`);
  console.log(`  Node:  ${process.version}`);
  console.log(`  Host:    ${os.hostname()}`);
  console.log('--------------------------------------------------');
});
