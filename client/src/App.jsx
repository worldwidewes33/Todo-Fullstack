import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");

  // add new todo item
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/todos", {
        description: todoText,
      });

      setTodoItems((prev) => [...prev, res.data.data.todo]);
      setTodoText("");
    } catch (err) {
      console.log(err);
    }
  };

  // delete todo item
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);

      setTodoItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // update todo item
  const renderUpdateForm = () => (
    <form className="update-form">
      <input type="text" placeholder="New Item" />
      <button>Update</button>
    </form>
  );

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/todos");

        setTodoItems(res.data.data.todos);
      } catch (err) {
        console.log(err);
      }
    };

    getAllTodos();
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form className="form" onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          placeholder="Add todo item"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todoItems.map((item) => (
          <div className="todo-item" key={item._id}>
            {isUpdating === item._id ? (
              renderUpdateForm()
            ) : (
              <>
                <p>{item.description}</p>
                <button
                  className="btn-update"
                  onClick={() => setIsUpdating(item._id)}
                >
                  Update
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(item._id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
