import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactListItem.styled';
import { ButtonDelete } from './ContactListItem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/operations';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

export const ContactListItem = ({ contact: {id, name, number} }) => {
  
const dispatch = useDispatch();
   
  return (
    <Item>
      {name}:{number}
      <ButtonDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//  <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text and icon
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem
//                   secondaryAction={
//                     <IconButton edge="end" aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                 >
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//     </Box>