import React from 'react';

const Modal = () => {
  <>
    <section className="overlay">
      <section className="whiteBox">
        <section className="formHeader">
          <h2 className="newTodoHeader">New todo</h2>
          <button type="button" id="btn-exitCreation">
            <i className="material-icons" id="btn-exitCreation">
              clear
            </i>
          </button>
        </section>
        <form id="newTodoForm">
          <label htmlFor="newTitle" id="formLabel">
            Title
          </label>
          <input
            type="text"
            id="newTitle"
            placeholder="Enter title"
            name="newTitle"
            required
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
          />
        </form>
        <button
          type="button"
          id="btn-createTodo"
          className="btn-createTodo"
          aria-label="Create Todo"
        />
      </section>
    </section>
  </>;
};

export default Modal;
