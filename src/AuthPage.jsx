import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function AuthPage({ theme }) {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className={`auth-page ${theme}`}>
      {isLogin ? (
        <LoginForm switchToSignUp={switchToSignUp} theme={theme} />
      ) : (
        <SignUpForm switchToLogin={switchToLogin} theme={theme} />
      )}
    </div>
  );
}

export default AuthPage;