import { LogInForm } from 'components/LogInForm/LogInForm';
import { Helmet } from 'react-helmet';

export default function LogIn() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogInForm />
    </div>
  );
}
