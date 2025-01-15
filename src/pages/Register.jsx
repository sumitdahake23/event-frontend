import React from "react";
import AuthForm from "../components/AuthForm";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      await api.post("/auth/register", formData);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong.");
    }
  };

  return <AuthForm title="Register" onSubmit={handleRegister} buttonText="Register" />;
};

export default Register;