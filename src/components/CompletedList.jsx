import React from 'react';
import Search from './Search';

const CompletedList = () => {
  const getData = () => {
    console.log('hello');
  };
  return (
    <>
      <Search />
      <h2>Completed todos</h2>
      <table>
        <tr>
          <th>{title}</th>
          <th>{author}</th>
          <th>{description}</th>
          <th>{completedDate}</th>
        </tr>
      </table>
    </>
  );
};

export default CompletedList;
