import React, { useState } from 'react';

const TodoCard = ({ todos, removeTodo, completeTodo }) => (
  <>
    {todos.map((todo) => (
      <article className="todo" key={todo.id}>
        <h2 id="todoTitle">{todo.title}</h2>
        <p id="todoDescription">{todo.description}</p>
        <section className="btnContainer">
          <button
            type="button"
            id="btn-delTodo"
            className="btn-delTodo"
            onClick={() => removeTodo(todo.id)}
          >
            Delete
          </button>
          <button
            type="button"
            id="btn-cmpTodo"
            className="btn-cmpTodo"
            onClick={() => completeTodo(todo.id)}
          >
            Complete
          </button>
        </section>
      </article>
    ))}
  </>
);

export default TodoCard;
