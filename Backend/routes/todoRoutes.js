const express = require("express");
const router = express.Router();


const {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");



// Get all todos
router.get("/", getTodos);

// Get single todo by ID
router.get("/:id", getTodoById);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;