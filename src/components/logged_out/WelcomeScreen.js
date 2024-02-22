import { useContext } from 'react';
import { LoginContext } from './LoggedOutWrapper';

const WelcomeScreen = () => {
  const { loginState, setLoginState } = useContext(LoginContext);
  
  const goToLogin = () => {
    setLoginState({
      ...loginState, 
      action: "login"
    });
  };

  const goToCreate = () => {
    setLoginState({
      ...loginState,
      action: "create"
    });
  };

  return (
    <>
      <img src="" />
      <h1>Welcome to CalPal!</h1>
      <button className="btn-lg" onClick={goToLogin}>
        Sign In
      </button>
      <button className="btn-lg" onClick={goToCreate}>
        Create a new Account
      </button>
    </>
  );
};

export default WelcomeScreen;