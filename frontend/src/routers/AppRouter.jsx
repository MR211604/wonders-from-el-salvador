import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../places';
import { NotFound } from './NotFound';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}
