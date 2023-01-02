import { Routes, Route } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import SinglePage from './Pages/SinglePage';

const Main = () => (
  <Routes>
    <Route path="/" element={<ListPage />} />
    <Route path="/Single" element={<SinglePage />} />
  </Routes>
);
export default Main;
