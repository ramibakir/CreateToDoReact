import React from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';

const CompletedList = ({ completed }) => {
  const getData = () => {
    console.log('hello');
  };
  return (
    <>
      {/* <Search /> */}
      <h2>Completed todos</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Completed date</th>
          </tr>
          <CompletedListItem completed={completed} />
        </tbody>
      </table>
    </>
  );
};

export default CompletedList;
