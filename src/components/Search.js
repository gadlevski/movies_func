import React, { useState } from 'react';
import Input from '@mui/material/InputBase';
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from '@mui/system';

function Search({ searchMovies = Function.prototype }) {

  const [search, setSeach] = useState('');
  const [type, setType] = useState('all')

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    console.log(event.target);
    setType(event.target.value)
    searchMovies(search, event.target.value)
  }


  return (
    <>
      <Box m='20px 0'>
        <Input
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={(event) =>
            setSeach(event.target.value)
          }
          onKeyDown={handleKey}
        />
        <Button
          onClick={() => {
            searchMovies(search, type);
          }}
          variant='outlined'
          color='inherit'
        >
          Найти
        </Button>
      </Box>

      <Box m='20px 0'>
        <RadioGroup row aria-label='films' defaultValue='all' name='radio-buttons-group'>
          <FormControlLabel
            value='all'
            control={<Radio />}
            label='Все фильмы и сериалы'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <FormControlLabel
            value='movie'
            control={<Radio />}
            label='Только фильмы'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <FormControlLabel
            value='series'
            control={<Radio />}
            label='Только сериалы'
            onChange={handleFilter}
            checked={type === 'series'}
          />
        </RadioGroup>
      </Box>
    </>
  );
}

export default Search;