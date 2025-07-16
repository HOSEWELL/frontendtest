"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FormPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "M",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register/", formData);
      alert("Registration successful!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "M",
      });
    } catch (err) {
      alert("Failed to register.");
    }
  };

  return (
    <>
      <NavBar />
      <div
        id="form"
        className="flex justify-center items-center min-h-[80vh] bg-white px-4 sm:px-6 lg:px-8 py-10"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-[#F9F9F9] border border-gray-300 rounded-2xl shadow-md p-6 sm:p-8 w-full max-w-md md:max-w-lg space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#03624C] mb-2 sm:mb-4">
            Register with Mann Gaddi
          </h2>

          {/* Names side-by-side on larger screens, stacked on small */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="first_name"
              placeholder="First Name"
              required
              value={formData.first_name}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-xl p-3"
            />
            <input
              name="last_name"
              placeholder="Last Name"
              required
              value={formData.last_name}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-xl p-3"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#03624C] text-white font-semibold py-3 rounded-xl hover:bg-[#024535] transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
