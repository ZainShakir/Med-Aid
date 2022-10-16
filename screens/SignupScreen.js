import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import { useState, useContext } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthentication, setAuthentication] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setAuthentication(true);
    try {
      const token = await createUser({ email, password });
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Sign Up Failed", error.response.data);
      setAuthentication(false);
    }
  }

  if (isAuthentication) {
    return <LoadingOverlay message="Creating User ..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
