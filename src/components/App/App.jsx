import { BrowserRouter } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MoviesRotes from '../../routes/MoviesRoutes/MoviesRoutes';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <HeaderMenu />
      <MoviesRotes />
    </BrowserRouter>
  );
};
