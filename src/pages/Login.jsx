import React from "react";
import AuthForm from "../components/AuthForm";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await api.post("/auth/login", { email: formData.email, password: formData.password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong.");
    }
  };

  return <AuthForm title="Login" onSubmit={handleLogin} buttonText="Login" />;
};

export default Login;
