import React, { useState } from "react";
import "./Loginstyle.scss";
// import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/NewRequest";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      toast.success("Successfully Logged In");
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);

    }
  };

  return (
    <div className="login">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <span style={{ color: "red" }}>{error && error}</span>
      </form>
    </div>
  );
}

export default Login;
