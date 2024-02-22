import { useContext } from "react";
import { LoginContext } from "./LoggedOutWrapper";

const LoginScreen = () => {
  const { loginState, setLoginState } = useContext(LoginContext);

  const validateInput = (event) => {
    event.preventDefault();
    // Get the user input:
    const username = document.getElementById("usernameField").value;
    const password = document.getElementById("passwordField").value;

    // The only check that I'm gonna do on this end is make sure that there has been provided both a username and a password.
    if (username.length === 0 || password.length === 0) {
      setLoginState({
        ...loginState,
        feedback: "Please input both a username and password."
      });
    } else {
      setLoginState({
        ...loginState,
        input: {
          un: username,
          pw: password
        }
      });
    }
  }

  return (
    <>
      <form>
        <input id="usernameField" defaultValue={loginState.input.un} />
        <input id="passwordField" defaultValue={""} />
        <button className="btn-lg" onClick={validateInput}>Submit</button>
        <p className="form-control-feedback">{loginState.feedback}</p>
      </form>
    </>
  );
};

export default LoginScreen;