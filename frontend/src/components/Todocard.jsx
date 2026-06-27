import { Link } from "react-router-dom";
import { updateTodo, deleteTodo } from "../services/todoService";

function TodoCard({ todo }) {

  const toggleComplete = async () => {
    try {
      await updateTodo(todo.id, {
        completed: !todo.completed,
      });

      window.location.reload();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this todo?")) return;

    try {
      await deleteTodo(todo.id);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = async () => {
    const title = prompt("Edit Title", todo.title);
    if (title === null) return;

    const description = prompt(
      "Edit Description",
      todo.description
    );
    if (description === null) return;

    const priority = prompt(
      "Priority (High, Medium, Low)",
      todo.priority
    );
    if (priority === null) return;

    try {
      await updateTodo(todo.id, {
        title,
        description,
        priority,
        completed: todo.completed,
      });

      window.location.reload();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="todo-card">

      <h3>{todo.title}</h3>

      <p>{todo.description}</p>

      <div className="todo-footer">

        <span
          className={`priority ${todo.priority.toLowerCase()}`}
        >
          {todo.priority}
        </span>

        <span
          className={todo.completed ? "done" : "pending"}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>

      </div>

      <div className="todo-actions">

        <Link
          className="view-btn"
          to={`/todo?id=${todo.id}`}
        >
          👁 View
        </Link>

        <button
          className="edit-btn"
          onClick={handleEdit}
        >
          ✏ Edit
        </button>

        <button
          className="complete-btn"
          onClick={toggleComplete}
        >
          {todo.completed
            ? "↩ Mark Pending"
            : "✔ Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default TodoCard;