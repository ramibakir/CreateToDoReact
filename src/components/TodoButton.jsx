import React from 'react';

const TodoButton = ({ handleVisibility }) => (
  <>
    <button
      className="btn-addTodo"
      id="turnOverlayOn"
      type="button"
      onClick={handleVisibility}
    >
      Add todo
    </button>

    {/* It works because in JavaScript, true && expression always evaluates to
      expression, and false && expression always evaluates to false. Therefore,
      if the condition is true, the element right after && will appear in the
      output. If it is false, React will ignore and skip it. */}
  </>
);

export default TodoButton;
