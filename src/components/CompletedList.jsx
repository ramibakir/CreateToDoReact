import React from 'react';

const CompletedList = () => {
  const getData = () => {
    console.log('hello');
  };
  return (
    <table>
      <tr>
        <th>{title}</th>
        <th>{author}</th>
        <th>{description}</th>
        <th>{completedDate}</th>
      </tr>
    </table>
  );
};

export default CompletedList;
