import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todos, removeTodo, completeTodo }) => (
  <main>
    <section className="cards">
      {todos && todos.length < 1 ? (
        <h3>No todos today :D</h3>
      ) : (
        <TodoCard
          removeTodo={removeTodo}
          todos={todos}
          completeTodo={completeTodo}
        />
      )}
    </section>
  </main>
);

export default TodoCardList;
