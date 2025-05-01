import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "./Login.css"; // Make sure this path is correct

const Login = () => {
  const { setToken } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      window.location.href = "/tasks";
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-heading">Welcome Back</h2>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" className="login-button">
          Login
        </button>

        <p className="login-register-text">
          Don't have an account?
          <Link to="/" className="login-register-link">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
