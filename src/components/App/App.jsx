import { BrowserRouter } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MoviesRotes from '../../routes/MoviesRotes/MoviesRotes';

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <MoviesRotes />
    </BrowserRouter>
  );
};
