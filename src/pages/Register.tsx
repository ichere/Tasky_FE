// import { useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../api/axiosInstance";
// import "./Login.css"; // Reuse the same CSS

// const Register = () => {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/register", form);
//       console.log("Registration successful", res.data);
//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Registration Error", error);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-illustration">
//         <img
//           src="https://www.svgrepo.com/show/439068/registration-form.svg"
//           alt="Register illustration"
//         />
//       </div>

//       <div className="login-container">
//         <form onSubmit={handleSubmit} className="login-form">
//           <h2 className="login-heading">Create an Account</h2>

//           <input
//             type="text"
//             placeholder="Username"
//             className="login-input"
//             onChange={(e) => setForm({ ...form, username: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="login-input"
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="login-input"
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             required
//           />

//           <button type="submit" className="login-button">
//             Register
//           </button>

//           <p className="login-register-text">
//             Already have an account?
//             <Link to="/login" className="login-register-link">
//               Login here
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosInstance";
import "./Login.css"; // Reuse the same CSS

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      console.log("Registration successful", res.data);
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration Error", error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-heading">Create an Account</h2>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button type="submit" className="login-button">
            Register
          </button>

          <p className="login-register-text">
            Already have an account?
            <Link to="/login" className="login-register-link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
