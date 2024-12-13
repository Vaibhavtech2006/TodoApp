import React from 'react';
import TodoItem from "./Todoitem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem 
          key={item.id} // Use unique ID for key
          todoDate={item.dueDate} 
          todoName={item.name} 
          onDeleteClick={() => onDeleteClick(item.id)} // Pass ID to delete function
        />
      ))}
    </div>
  );
};

export default TodoItems;
