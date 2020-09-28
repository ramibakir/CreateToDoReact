import React from 'react';
import TodoCard from './TodoCard';
import Cards from './Cards';

const todosInfo = Cards.map((todo) => <TodoCard key={todo.id} todo={todo} />);

const TodoCardList = () => (
  <main>
    <section className="cards">{todosInfo}</section>
  </main>
);

export default TodoCardList;
