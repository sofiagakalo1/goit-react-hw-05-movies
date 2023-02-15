import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    // console.log(search);
  };

  const handleChange = event => {
    const { value } = event.target;
    setSearch(value);
    // console.log(value);
  };

  return (
    <div className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="input"
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
