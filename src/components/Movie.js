import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function Movie(props) {

  return (
    <>
      <Card id={props.imdbID} sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image={
            props.Poster === 'N/A'
              ? `https://via.placeholder.com/300x150?text=${props.Title}`
              : props.Poster
          }
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.Title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.Year} {props.Type}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Movie;
