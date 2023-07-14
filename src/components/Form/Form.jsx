import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, StyledForm, Btn } from './Form.styled';

const Form = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleInputChange} />
      <Btn type="submit">Search</Btn>
    </StyledForm>
  );
};

export default Form;

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
};
