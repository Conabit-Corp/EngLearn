import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTypedSelector } from '../../redux/useTypedSelector.redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AlertDialog = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    open,
    title,
    description,
    disagreeButtonText,
    agreeButtonText,
    agreeFunction,
    vlaueAgreeFunction,
  } = useTypedSelector(state => state.confirmAlertReducer);

  const disagreeClose = () => {
    dispatch({ type: "CLOSE_CONFIRMALERT" })
  };

  const agreeClose = () => {
    agreeFunction?.(navigate, vlaueAgreeFunction);
    dispatch({ type: "CLOSE_CONFIRMALERT" });
  };

  return (
    <Dialog
      open={open}
      onClose={disagreeClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={disagreeClose}>{disagreeButtonText}</Button>
        <Button onClick={agreeClose} autoFocus>
          {agreeButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
