const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/todos.json");

// Get all todos
const getTodos = (req, res) => {
    const data = fs.readFileSync(filePath);
    const todos = JSON.parse(data);

    res.json(todos);
};

// Get one todo by ID
const getTodoById = (req, res) => {
    const data = fs.readFileSync(filePath);
    const todos = JSON.parse(data);

    const id = parseInt(req.params.id);

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    res.json(todo);
};

// Create a new todo
const createTodo = (req, res) => {
    // Read existing todos
    const data = fs.readFileSync(filePath);
    const todos = JSON.parse(data);

    // Get data from request body
    const { title, description, completed, priority } = req.body;

    // Create a new todo
    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        title,
        description,
        completed,
        priority
    };

    // Add it to the array
    todos.push(newTodo);

    // Save back to todos.json
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

    // Send response
    res.status(201).json(newTodo);
};

// Update a todo
const updateTodo = (req, res) => {
    const data = fs.readFileSync(filePath);
    const todos = JSON.parse(data);

    const id = parseInt(req.params.id);

    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todos[index] = {
        ...todos[index],
        ...req.body
    };

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

    res.json(todos[index]);
};

// Delete a todo
const deleteTodo = (req, res) => {
    const data = fs.readFileSync(filePath);
    const todos = JSON.parse(data);

    const id = parseInt(req.params.id);

    const filteredTodos = todos.filter(todo => todo.id !== id);

    if (filteredTodos.length === todos.length) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    fs.writeFileSync(filePath, JSON.stringify(filteredTodos, null, 2));

    res.json({
        message: "Todo deleted successfully"
    });
};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};