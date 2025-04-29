import { useState } from "react";
import API from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { setToken } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await API.post("/auth/register", form);
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
    window.location.href = "/tasks";
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <input className="border p-2" type="text" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="border p-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Register;