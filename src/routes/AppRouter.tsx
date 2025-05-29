import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HeroPage from '../pages/HeroPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  );
}