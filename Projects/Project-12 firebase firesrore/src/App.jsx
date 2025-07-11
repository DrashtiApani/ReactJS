import React, { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from './Firestore';

const db = getFirestore(app);

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const todosRef = collection(db, 'todos');

  // 🔄 Fetch all todos from Firestore
  const fetchTodos = async () => {
    const allData = await getDocs(todosRef);
    const todos = allData.docs.map(doc => ({
      id: doc.id,
      text: doc.data().text
    }));
    setTasks(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ➕ Add Todo to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const docRef = await addDoc(todosRef, { text: input });
    setTasks([
      ...tasks,
      {
        id: docRef.id,
        text: input
      }
    ]);
    
    setInput('');
  };

  // ❌ Remove a Todo from Firestore
  const removeTask = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ❌❌ Remove all Todos from Firestore
  const clearAllTasks = async () => {
    const allData = await getDocs(todosRef);
    const deleteDoc = allData.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deleteDoc);
    setTasks([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Todo List</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Add a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.addBtn}>Submit</button>
      </form>

      {tasks.length > 0 && (
        <div style={styles.todoBox}>
          {tasks.map((task, index) => (
            <div key={task.id} style={styles.todoItem}>
              <span>{index + 1}. {task.text}</span>
              <button style={styles.removeBtn} onClick={() => removeTask(task.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {tasks.length > 0 && (
        <button onClick={clearAllTasks} style={styles.clearBtn}>Clear List</button>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '30px'
  },
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px',
    borderRadius: '5px',
    width: '400px',
    margin: 'auto',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  form: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  input: {
    padding: '10px',
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  addBtn: {
    padding: '10px 20px',
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  todoBox: {
    margin: '30px auto',
    width: '400px',
    backgroundColor: '#f2f5f7',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '10px 15px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  removeBtn: {
    backgroundColor: '#5a6770',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  clearBtn: {
    backgroundColor: 'red',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default App;
