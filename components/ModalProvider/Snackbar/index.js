import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar = ({ isOpen, onClose }) => (
  <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
    <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
      The user was successfully saved!
    </Alert>
  </Snackbar>
);

export default CustomizedSnackbar
