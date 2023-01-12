import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginForm } from './LoginForm/LogInForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { ContactsList } from 'pages/ContactsList';

const HomePage = lazy(() => import('../pages/Home'));
// const LoginFormPage = lazy(() => import('../pages/Login'));
// const RegisterFormPage = lazy(() => import('../pages/Register'));
// const ContactsPage = lazy(() => import('../pages/ContactsList'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contacts" element={<ContactsList />} />
      </Route>
    </Routes>
  );
};
