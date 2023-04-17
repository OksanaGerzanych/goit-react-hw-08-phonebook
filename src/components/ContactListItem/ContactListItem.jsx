import React from 'react';
import PropTypes from 'prop-types';


import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 2, maxWidth: 400 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={number}
            />
            <IconButton  aria-label="delete" type="button" onClick={() => dispatch(deleteContact(id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
          ,
        </Grid>
      </Grid>
    </Box>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};





    // <Item>
    //   {name}:{number}
    //   <ButtonDelete type="button" onClick={() => dispatch(deleteContact(id))}>
    //     Delete
    //   </ButtonDelete>
    //   </Item>