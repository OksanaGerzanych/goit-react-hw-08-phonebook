import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { FilterContainer } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleFilterChange = event =>
    dispatch(setFilterContacts(event.target.value));

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FilterContainer>
        <TextField
          type="search"
          value={filter}
          onChange={handleFilterChange}
          id="filled-search"
          label="Search"
          variant="filled"
          style={{ width: 400 }}
        />
      </FilterContainer>
    </Box>
  );
};
