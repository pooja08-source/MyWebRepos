import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signup = (name, email, password) => {
    const accounts = JSON.parse(
      localStorage.getItem("wanderly-accounts") || "{}"
    );

    const key = email.trim().toLowerCase();

    if (accounts[key]) {
      return {
        success: false,
        message:
          "An account with this email already exists. Please login.",
      };
    }

    accounts[key] = {
      name: name.trim(),
      email: key,
      password,
    };

    localStorage.setItem(
      "wanderly-accounts",
      JSON.stringify(accounts)
    );

    setUser({
      name: name.trim(),
      email: key,
    });

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const login = (email, password) => {
    const accounts = JSON.parse(
      localStorage.getItem("wanderly-accounts") || "{}"
    );

    const key = email.trim().toLowerCase();
    const account = accounts[key];

    if (!account) return false;
    if (account.password !== password) return false;

    setUser({
      name: account.name,
      email: account.email,
    });

    return true;
  };

  const forgotPassword = (email, newPassword) => {
    const accounts = JSON.parse(
      localStorage.getItem("wanderly-accounts") || "{}"
    );

    const key = email.trim().toLowerCase();

    if (!accounts[key]) {
      return {
        success: false,
        message: "No account found with this email.",
      };
    }

    accounts[key].password = newPassword;

    localStorage.setItem(
      "wanderly-accounts",
      JSON.stringify(accounts)
    );

    return {
      success: true,
      message: "Password changed successfully.",
    };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        forgotPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;