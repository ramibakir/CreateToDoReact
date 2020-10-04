import React from 'react';

const Modal = ({
  handleVisibility,
  handleCreate,
  setFormData,
  formData,
  charsLeft,
  setCharsLeft,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate();
    setFormData({});
  };

  const charCounter = (event) => {
    const maxChars = 50;

    const currentDescription = event.target.value;
    const currentCharacterCount = currentDescription.length;
    setCharsLeft(maxChars - currentCharacterCount);
  };

  const updateValue = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onChangeMultipleFunctions = (event) => {
    updateValue(event);
    charCounter(event);
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
              name="title"
              required
              value={formData.title}
              onChange={updateValue}
            />

            <label htmlFor="newDescription" id="formLabel">
              Description (<span id="charactersLeft">{charsLeft}</span>{' '}
              characters left)
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter description"
              maxLength="50"
              required
              value={formData.description}
              onChange={onChangeMultipleFunctions}
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
