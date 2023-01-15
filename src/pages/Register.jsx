import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
};
