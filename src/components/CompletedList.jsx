import React from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';

const CompletedList = ({ todos }) => {
  const getData = () => {
    console.log('hello');
  };
  return (
    <>
      <Search />
      <h2>Completed todos</h2>
      <table>
        <tbody>
          <tr>
            <th>{title}</th>
            <th>{author}</th>
            <th>{description}</th>
            <th>{completedDate}</th>
          </tr>
          <CompletedListItem todos={todos} />
        </tbody>
      </table>
    </>
  );
};

export default CompletedList;
