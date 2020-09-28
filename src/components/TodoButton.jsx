import React, { useState } from 'react';

const TodoButton = () => {
  const [visibility, setVisibility] = useState(false);

  function handleCreateTodo() {
    setVisibility((hidden) => !hidden);
  }

  return (
    <button
      className="btn-addTodo"
      id="turnOverlayOn"
      type="button"
      onClick={handleCreateTodo}
    >
      Add todo
    </button>
  );
};

export default TodoButton;
