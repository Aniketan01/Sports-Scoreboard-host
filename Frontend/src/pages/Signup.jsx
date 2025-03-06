import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful! Now login.");
    } catch (err) {
      alert("Signup failed! User may already exist.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-4">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button className="btn btn-dark w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
