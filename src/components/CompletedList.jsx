import React, { useState } from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';

const CompletedList = ({ completed }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search setSearch={setSearch} />
      <h2>Completed todos</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Completed date</th>
          </tr>
          <CompletedListItem completed={completed} search={search} />
        </tbody>
      </table>
    </>
  );
};

export default CompletedList;
