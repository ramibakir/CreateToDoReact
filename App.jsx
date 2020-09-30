import React, { useState } from 'react';
// import CompletedList from './src/components/CompletedList';
import Modal from './src/components/Modal';
import Navbar from './src/components/Navbar';
// import Search from './src/components/Search';
import TodoButton from './src/components/TodoButton';
import TodoCard from './src/components/TodoCard';
import TodoCardList from './src/components/TodoCardList';

const App = () => {
  const [modal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [todos, setTodos] = useState([]);

  const handleCreate = () => {
    console.log('heiiii?');
    setTodos((prev) => [{ id: todos.length, ...formData }, ...prev]);
  };

  const handleVisibility = () => {
    setShowModal((visible) => !visible);
  };

  const removeTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <>
      <pre>{JSON.stringify(todos)}</pre>
      <Navbar />
      {modal && (
        <Modal
          handleVisibility={handleVisibility}
          handleCreate={handleCreate}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      <TodoButton handleVisibility={handleVisibility} />
      <TodoCardList>
        {todos && todos.length < 1 ? (
          <h3>No todos today :D</h3>
        ) : (
          <TodoCard removeTodo={removeTodo} todos={todos} />
        )}
      </TodoCardList>
    </>
  );
};
export default App;
