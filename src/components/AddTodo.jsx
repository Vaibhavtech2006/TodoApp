import React, { useState } from 'react';

function AddTodo({ onNewItem }) {
  // Initialize state with empty strings
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Update todoName state on input change
  const handleNameChange = (event) => {
    setTodoName(event.target.value); // Update state
    console.log(event.target.value); // Log the current value
  };

  // Update dueDate state on date input change
  const handleDateChange = (event) => {
    setDueDate(event.target.value); // Update state
    console.log(event.target.value); // Log the current value
  };

  // Handle button click to add a new todo item
  const handleAddButtonClicked = () => {
    if (todoName && dueDate) { // Check if both fields are filled
      onNewItem(todoName, dueDate);
      setTodoName(''); // Clear input field after submission
      setDueDate(''); // Clear date field after submission
    } else {
      alert("Please fill in both fields."); // Alert if fields are empty
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input 
            type="text" 
            placeholder="Enter Todo Here" 
            value={todoName} // Bind input value to state
            onChange={handleNameChange} // Corrected event handler name
          />
        </div>
        <div className="col-4">
          <input 
            type="date" 
            value={dueDate} // Bind date input value to state
            onChange={handleDateChange} 
          />
        </div>
        <div className="col-2">
          <button 
            type="button" 
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
