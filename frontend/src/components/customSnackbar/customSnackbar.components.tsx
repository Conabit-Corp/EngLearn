import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef, useState } from 'react';
import { useTypedSelector } from '../../redux/useTypedSelector.redux';
import { useDispatch } from 'react-redux';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  severity: string,
  text: string,
  open: boolean,
}

export const CustomSnackbar = (): JSX.Element => {
  const dispatch = useDispatch();
  const { severity, text, open } = useTypedSelector(state => state.snackbar)
  console.log(severity);

  // const [open, setOpen] = useState(false);


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({ type: "CLOSE_SNACKBAR" })
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {text}
        </Alert>
      </Snackbar>
    </>
  )
}
