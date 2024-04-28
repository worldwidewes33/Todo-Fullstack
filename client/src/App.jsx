function App() {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <form className="form">
        <input type="text" placeholder="Add todo item" />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        <div className="todo-item">
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn-update">Update</button>
          <button className="btn-delete">Delete</button>
        </div>
        <div className="todo-item">
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn-update">Update</button>
          <button className="btn-delete">Delete</button>
        </div>
        <div className="todo-item">
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn-update">Update</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
