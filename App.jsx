import React, { useState } from 'react';
import CompletedList from './src/components/CompletedList';
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
  const [count, setCount] = useState(0);

  const idCounter = () => {
    setCount((c) => c + 1);
  };

  const handleVisibility = () => {
    setShowModal((visible) => !visible);
  };

  const handleCreate = () => {
    setTodos((prev) => [{ id: count, ...formData }, ...prev]);
    idCounter();
    handleVisibility();
  };

  const removeTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    console.log(...b, ...a);
  };

  const completeTodo = (id) => {
    console.log('hei<3');
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
      <TodoCardList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
      {/* <CompletedList todos={todos} /> */}
    </>
  );
};
export default App;
