import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Input, StyledForm, Btn } from './Form.styled';

const Form = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        required
      />
      <Btn type="submit">Search</Btn>
    </StyledForm>
  );
};

export default Form;

// Form.propTypes = {
// onSubmit: PropTypes.func.isRequired,
// };
