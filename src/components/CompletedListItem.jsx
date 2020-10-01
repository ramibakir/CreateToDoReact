import React from 'react';

const CompletedListItem = ({ completed }) => {
  const date = () => {
    const dateObject = new Date();

    return `${dateObject.getDate()}/${
      dateObject.getMonth() + 1
    }/${dateObject.getFullYear()}`;
  };
  return (
    <>
      {completed.map((complete) => (
        <tr key={complete.id}>
          <td>{complete.title}</td>
          <td>{complete.description}</td>
          <td>{complete.author}</td>
          <td>{date()}</td>
        </tr>
      ))}
    </>
  );
};

export default CompletedListItem;
