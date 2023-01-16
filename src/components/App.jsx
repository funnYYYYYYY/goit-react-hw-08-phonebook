import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const LoginFormPage = lazy(() => import('../pages/Login'));
const RegisterFormPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/ContactsList'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute element={LoginFormPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              element={RegisterFormPage}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={ContactsPage} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};
