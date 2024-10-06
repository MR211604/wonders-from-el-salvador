import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../places';
import { NotFound } from './NotFound';
import { LoginPage, RegisterPage } from '../auth/pages';
import { TestComponent } from '../places/components/TestComponent';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test/places" element={<TestComponent />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}
