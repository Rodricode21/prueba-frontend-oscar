import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { handleSubmit } from "../api/Api";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import PopupMovieSaved from "./PopupMovieSaved";
import InputMask from "react-input-mask";

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 24px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  min-width: 200px;
`;
const ErrorLabel = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const CustomInputMask = styled(InputMask)`
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const MovieForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    duration: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});
  const { isOpen, openModal, closeModal } = useModal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    const fieldValidations = {
      name: /^[a-zA-Z0-9\s]+$/,
      date: /^\d{4}-\d{2}-\d{2}$/,
      duration: /^\d+$/,
      budget: /^\d+$/,
    };

    const errorMessages = {
      name: "Invalid name",
      date: "Invalid date (format: YYYY-MM-DD)",
      duration: "Invalid duration (only numbers allowed)",
      budget: "Invalid budget (only numbers allowed)",
    };

    for (const fieldName in fieldValidations) {
      const regex = fieldValidations[fieldName];
      const value = formData[fieldName];

      if (!value || !regex.test(value)) {
        newErrors[fieldName] = errorMessages[fieldName];
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Devuelve true si no hay errores
  };
  console.log(formData);
  const handleFormSubmit = async () => {
    const isFormValid = validateForm(); // Validamos el formulario antes de enviarlo

    if (isFormValid) {
      debugger;

      try {
        await handleSubmit(formData);
        openModal();
        setFormData({
          name: "",
          date: "",
          duration: "",
          budget: "",
        });

        //clear the inputs for the user if they want add another movie
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  return (
    <FormWrapper>
      <Title>Movies</Title>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <PopupMovieSaved />
        </Modal>
      )}
      <FormField>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorLabel>{errors.name}</ErrorLabel>}
      </FormField>
      <FormField>
        <Label>Relaase Date:</Label>

        <Input
          // mask="YYYY-MM-DD"
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          maskPlaceholder="YYYY-MM-DD"
        />

        {/* <InputMask /> */}
        {errors.date && <ErrorLabel>{errors.date}</ErrorLabel>}
      </FormField>
      <FormField>
        <Label>Duration (minutes):</Label>
        <Input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
        {errors.duration && <ErrorLabel>{errors.duration}</ErrorLabel>}
      </FormField>
      <FormField>
        <Label>Budget:</Label>
        <Input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />
        {errors.budget && <ErrorLabel>{errors.budget}</ErrorLabel>}
      </FormField>
      <Button onClick={handleFormSubmit}>Save</Button>
    </FormWrapper>
  );
};

export default MovieForm;
