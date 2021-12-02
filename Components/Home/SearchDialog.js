import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import CloseIcon from '@material-ui/icons/Close';
import useTranslation from 'next-translate/useTranslation';
import FormControl from '@material-ui/core/FormControl';
import styles from '../../styles/home.module.scss';
const searchDialog = ({ setIsOpen, isOpen, locale }) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  const { t } = useTranslation();
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
      <CloseIcon
        className={styles.closeSearch}
        onClick={handleClose}
        style={locale === 'he' ? { right: '0rem' } : { left: '0rem' }}
      />
      <div
        className={styles.searchInputDiv}
        style={locale === 'he' ? { flexDirection: 'row-reverse' } : null}>
        <input
          className={styles.searchInput}
          type="text"
          name="firstName"
          placeholder={t('common:search-placeholder')}
          dir={locale === 'he' ? 'rtl' : 'ltf'}
        />
        <SearchIcon
          className={styles.searchIcon}
          style={locale === 'he' ? { marginRight: '2rem' } : { marginLeft: '2rem' }}
        />{' '}
      </div>
    </Dialog>
  );
};
export default searchDialog;
