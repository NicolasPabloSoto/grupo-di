import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    (window as any).netlifyIdentity.open();
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};

export default LoginButton;
