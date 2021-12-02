import React, { useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useRouter } from 'next/router';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import CloseIcon from '@material-ui/icons/Close';
import useTranslation from 'next-translate/useTranslation';
import FormControl from '@material-ui/core/FormControl';
import styles from '../../styles/home.module.scss';
const searchDialog = ({ setIsOpen, isOpen, locale, setOpenMenu }) => {
  const router = useRouter();
  const ref = useRef(null);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSearch = e => {
    e.preventDefault();
    const search = ref?.current?.value;
    if (!search) {
      return null;
    }
    const keys = search.replace(/\s/g, '%20'); //HimynameisFlavio
    router.push(`/search?key=${keys}`).then(() => {
      handleClose();
      setOpenMenu(false);
      return window.scrollTo({ top: 610, behavior: 'smooth' });
    });
  };

  const { t } = useTranslation();
  return (
    <div style={{ position: 'relative' }}>
      <CloseIcon
        className={styles.closeSearch}
        onClick={handleClose}
        style={isOpen ? { display: 'block' } : { display: 'none' }}
      />
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
        <form onSubmit={e => handleSearch(e)}>
          <div
            className={styles.searchInputDiv}
            style={locale === 'he' ? { flexDirection: 'row-reverse' } : null}>
            <input
              ref={ref}
              className={styles.searchInput}
              type="text"
              name="firstName"
              placeholder={t('common:search-placeholder')}
              dir={locale === 'he' ? 'rtl' : 'ltf'}
            />
            <button type="submit" className={styles.submitBtn}>
              <SearchIcon
                onClick={handleSearch}
                className={styles.searchIcon}
                style={locale === 'he' ? { marginRight: '2rem' } : { marginLeft: '2rem' }}
              />
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
export default searchDialog;
