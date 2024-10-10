import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../places';
import { NotFound } from './NotFound';
import { LoginPage, RegisterPage } from '../auth/pages';
import { TestComponent } from '../places/components/TestComponent';
import { PlacePage } from '../places/pages/PlacePage';
import { useContext } from 'react';
import { AuthContext } from '../auth/provider/AuhProvider';
import { useEffect } from 'react';

export const AppRouter = () => {

  const { auth, fetchUserData, verifyToken } = useContext(AuthContext)

  console.log('informacion de auth', auth)

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData])

  useEffect(() => {
    verifyToken();
  }, [verifyToken])

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/place/:place_id" element={<PlacePage />} />
        <Route path="/test/places" element={<TestComponent />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}
