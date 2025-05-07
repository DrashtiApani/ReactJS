import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Todo
  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;

    if (isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = inputValue;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: inputValue, isActive: true }]);
    }

    setInputValue('');
  };

  // Edit Todo
  const handleEdit = (index) => {
    setInputValue(todos[index].text);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Delete Todo
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Toggle Active/Deactive status
  const toggleActiveStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isActive = !updatedTodos[index].isActive;
    setTodos(updatedTodos);
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2>📝 Todo List</h2>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flex: 1, padding: 8 }}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTodo} style={{ marginLeft: 10, padding: '8px 16px' }}>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{
            marginBottom: 8,
            padding: 8,
            backgroundColor: '#f9f9f9',
            borderRadius: 5,
            textDecoration: todo.isActive ? 'none' : 'line-through', // strike-through for deactive
            color: todo.isActive ? '#000' : '#aaa'
          }}>
            <span>{todo.text}</span>
            <div style={{ float: 'right' }}>
              <button onClick={() => toggleActiveStatus(index)} style={{ marginRight: 8 }}>
                {todo.isActive ? 'Deactive' : 'Active'}
              </button>
              <button onClick={() => handleEdit(index)} style={{ marginRight: 8 }}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
