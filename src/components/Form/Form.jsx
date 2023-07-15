import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, StyledForm, Btn } from './Form.styled';
import { useSearchParams } from 'react-router-dom';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFromURL = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (movieFromURL) {
      setValue(movieFromURL);
    }
  }, [movieFromURL]);

  useEffect(() => {
    if (value) {
      setSearchParams({ movie: value });
    } else {
      setSearchParams({});
    }
  }, [value, setSearchParams]);

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
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
  onSubmit: PropTypes.func.isRequired,
};
