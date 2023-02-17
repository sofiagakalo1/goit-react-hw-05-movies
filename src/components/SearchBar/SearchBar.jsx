import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit, initialValue }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(initialValue);
  }, [initialValue]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    // console.log(search);
  };

  const handleChange = event => {
    setSearch(event.target.value);
    // console.log(value);
  };

  return (
    <div className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="input"
          value={search}
          onChange={handleChange}
          className={css.searchForm_input}
          placeholder="Search movie..."
        />
        <button type="submit" className={css.searchForm_button}>
          <BsSearch className={css.icon} />
          <span className={css.searchForm_button_label}>Search</span>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;

SearchBar.defaultProps = {
  initialValue: '',
};

SearchBar.propTypes = {
  initialValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
