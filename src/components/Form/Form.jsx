import React from 'react';
import PropTypes from 'prop-types';
import { Input, StyledForm, Btn } from './Form.styled';

const Form = ({ movie, onChange }) => {
  const handleInputChange = e => {
    onChange(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" value={movie} onChange={handleInputChange} />
      <Btn type="submit">Search</Btn>
    </StyledForm>
  );
};

export default Form;

Form.propTypes = {
  movie: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
