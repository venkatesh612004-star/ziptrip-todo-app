import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import {
  getTodos,
  createTodo,
} from "../services/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  const addTodo = async (todo) => {
    try {
      await createTodo(todo);
      loadTodos();
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>My Todos</h2>

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Add Todo Form */}
        <TodoForm onAdd={addTodo} />

        {/* Todo List */}
        {filteredTodos.length === 0 ? (
          <EmptyState />
        ) : (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
            />
          ))
        )}
      </div>
    </>
  );
}

export default TodoList;