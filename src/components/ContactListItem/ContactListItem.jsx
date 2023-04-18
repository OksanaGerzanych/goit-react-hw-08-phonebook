import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
 
    <Box sx={{ flexGrow: 1 }}  style={{ display: 'flex', justifyContent: 'center' }}>
               <ListItem sx={{width: 420}} textalign={"center"}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircleIcon />
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