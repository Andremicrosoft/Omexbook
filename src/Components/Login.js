import "../Styles/Login.css";
import Button from "@mui/material/Button";
import { auth, provider, MSProvider } from "../firebase.js";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const guest = {
    displayName: "Avoca Guest",
    photoURL: "https://imgur.com/user/cyberavocado21/avatar",
  };

  const signInAsAGuest = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: guest,
    });
  };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  const signInwithMS = () => {
    auth
      .signInWithPopup(MSProvider)
      .then((result) => {
        console.log("Microsoft authentification", result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
        />
        <h1>Omexbook</h1>
      </div>
      <div className="signin-button">
        <Button
          type="submit"
          onClick={signInwithMS}
          style={{ backgroundColor: "#0072C6" }}
        >
          Sign in with Outlook (not ready)
        </Button>
        <Button
          type="submit"
          onClick={signIn}
          style={{ backgroundColor: "#DB4437" }}
        >
          Sign in with Gmail
        </Button>
        <Button
          type="submit"
          onClick={signInAsAGuest}
          style={{ backgroundColor: "#019267" }}
        >
          Sign in as a Guest
        </Button>
      </div>
    </div>
  );
}

export default Login;
