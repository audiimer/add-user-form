import React, { useState } from "react";
import Modal from "./Modal";
import form from "./form.module.css";

function AddUserForm({ savedUser }) {
  // Setting up the useState for name, age, modal trigger and errors
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    setAgeError(false);
  };


  // Form submission trigger
  const handleSubmit = (event) => {
    event.preventDefault();

    //Conditional statement that verifies if the input data is valid
    if (!name.trim()) {
        setIsModalOpen(true);
        setModalMessage("Name cannot be empty.");
        setNameError(true);
        return;
      }

      if (!isNaN(Number(name))) {
        setIsModalOpen(true);
        setModalMessage("Name cannot contain numbers.");
        setNameError(true);
        return;
      }

      if (age < 1 || age > 110) {
        setIsModalOpen(true);
        setModalMessage("Age must be between 1 and 110.");
        setAgeError(true);
        return;
      }

    const user = {
      name: name,
      age: age,
    };

    //
    savedUser(user);

    setName("");
    setAge("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className={form.formContainer}>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
      <div className={form.test}>
      <h2>User Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={form.input}>
          <div>
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              id="nameInput"
              value={name}
              onChange={handleNameChange}
              className={nameError ? form.invalid  : ""}
            />
          </div>
          <div>
            <label htmlFor="ageInput">Age:</label>
            <input
              type="number"
              id="ageInput"
              value={age}
              onChange={handleAgeChange}
              className={ageError ? form.invalid : ""}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUserForm;
