import React, { useState } from 'react';
import Modal from './src/components/Modal';
import Navbar from './src/components/Navbar';
// import Search from './src/components/Search';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';

const App = () => {
  const [modal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [charsLeft, setCharsLeft] = useState(50);

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
  };

  const completeTodo = (id) => {
    const completedTodo = todos.filter((todo) => todo.id === id);
    setCompleted((prev) => [...completedTodo, ...prev]);
    setTodos(todos.filter((todo) => todo.id !== id));
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
          charsLeft={charsLeft}
          setCharsLeft={setCharsLeft}
        />
      )}
      <TodoButton handleVisibility={handleVisibility} />
      <TodoCardList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
      <CompletedList completed={completed} />
    </>
  );
};
export default App;
