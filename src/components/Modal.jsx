import React, { useState } from 'react';

const Modal = ({ handleVisibility, handleCreate, setFormData, formData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate();
    console.log(event.target.elements.newTitle.value);
    console.log(event.target.elements.newDescription.value);
    console.log(event.target.elements.newAuthor.value);
  };

  const updateValue = (event) => {
    setFormData({
      title: event.target.value.title,
      description: event.target.value.description,
      author: event.target.value.author,
    });
  };

  return (
    <>
      <section className="overlay">
        <section className="whiteBox">
          <section className="formHeader">
            <h2 className="newTodoHeader">New todo</h2>
            <button
              type="button"
              id="btn-exitCreation"
              onClick={handleVisibility}
            >
              Exit
            </button>
          </section>
          <form id="newTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="newTitle" id="formLabel">
              Title
            </label>
            <input
              type="text"
              id="newTitle"
              placeholder="Enter title"
              name="newTitle"
              required
              value={formData.title}
              onChange={updateValue}
            />

            <label htmlFor="newDescription" id="formLabel">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="newDescription"
              placeholder="Enter description"
              maxLength="50"
              required
              value={formData.description}
              onChange={updateValue}
            />

            <label htmlFor="newAuthor" id="formLabel">
              Author
            </label>
            <input
              type="text"
              id="newAuthor"
              placeholder="Enter author"
              name="author"
              required
              value={formData.author}
              onChange={updateValue}
            />
            <button
              type="submit"
              id="btn-createTodo"
              className="btn-createTodo"
              aria-label="Create Todo"
            >
              Create todo
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Modal;
