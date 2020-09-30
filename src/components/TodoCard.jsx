import React, { useState } from 'react';

// const todosInfo = Cards.map((todo) => <TodoCard key={todo.id} todo={todo} />);

const TodoCard = ({}) => (
  <>
    <article className="todoOne">
      <h2 id="todoTitle">Hello</h2>
      <p id="todoDescription">PLs help</p>
      <section className="btnContainer">
        <button type="button" id="btn-delTodo" className="btn-delTodo">
          Delete
        </button>
        <button type="button" id="btn-cmpTodo" className="btn-cmpTodo">
          Complete
        </button>
      </section>
    </article>
  </>
);

export default TodoCard;
