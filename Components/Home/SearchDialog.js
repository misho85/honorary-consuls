import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from '../../styles/home.module.scss';
const searchDialog = ({ setIsOpen, isOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
      <FormControl>
        <InputLabel>Enter the name of consul or country...</InputLabel>
        <Input
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Dialog>
  );
};
export default searchDialog;
