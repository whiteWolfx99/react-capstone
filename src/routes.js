import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ListPage = lazy(() => import('./Pages/ListPage'));
const SinglePage = lazy(() => import('./Pages/SinglePage'));

const Main = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="fallback">Loading...</div>}>
      <Routes>
        <Route path="/react-capstone/" element={<ListPage />} />
        <Route path="/react-capstone/:id" element={<SinglePage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default Main;
