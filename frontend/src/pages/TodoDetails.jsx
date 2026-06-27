import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { getTodo } from "../services/todoService";

function TodoDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [todo, setTodo] = useState(null);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    try {
      const data = await getTodo(id);
      setTodo(data);
    } catch (error) {
      console.error("Error loading todo:", error);
    }
  };

  if (!todo) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="todo-details">

          <h2>{todo.title}</h2>

          <p>
            <strong>Description</strong>
          </p>

          <p>{todo.description}</p>

          <hr />

          <p>
            <strong>Priority</strong>
          </p>

          <span
            className={`priority ${todo.priority.toLowerCase()}`}
          >
            {todo.priority}
          </span>

          <br />
          <br />

          <p>
            <strong>Status</strong>
          </p>

          <span
            className={todo.completed ? "done" : "pending"}
          >
            {todo.completed ? "✅ Completed" : "⏳ Pending"}
          </span>

          <br />
          <br />

          <Link
            className="back-btn"
            to="/"
          >
            ← Back to Todos
          </Link>

        </div>
      </div>
    </>
  );
}

export default TodoDetails;