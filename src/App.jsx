import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import React, { useState } from 'react';

function App() {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName}, Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { id: Date.now(), name: itemName, dueDate: itemDueDate } // Unique ID
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemId) => {
    console.log(`Attempting to delete item with ID: ${todoItemId}`);
    const newTodoItems = todoItems.filter((item) => item.id !== todoItemId);
    setTodoItems(newTodoItems);
    console.log(`Remaining items after deletion:`, newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
