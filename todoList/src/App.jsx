import { useState } from "react";
import { List } from "./components/List";

const todos = [];

function App() {
  const [todoList, setTodoList] = useState(todos);
  const [todoName, setTodoName] = useState("");

  const handleAddToDo = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoName,
        status: "todo",
      },
    ]);
  };

  const handleDeleteItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        className="inputBox"
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
      />

      <button className="btn" onClick={handleAddToDo}>
        Add New Item
      </button>

      <List todos={todoList} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
