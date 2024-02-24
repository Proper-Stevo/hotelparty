"use client"
import React, { useState } from 'react';
import Link from "next/link";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('User signed in successfully');
        // Redirect user or do something else
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while signing in');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pt-10">
        <div className="">
          <img src="\signup\welcomeback.jpg" className=" h-96 w-96" />
        </div>

        <div className="">
          <h2 className="text-3xl font-semibold mb-6">Sign In</h2>

          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-2">Username or Email</label>
              <input type="text" id="username" name="username" className="border w-3/4 p-2 rounded" value={formData.username} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <input type="password" id="password" name="password" className="border w-3/4 p-2 text-black rounded" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">
              Log In
            </button>

            <div className="">
              If you don't have a log in click <Link href="/signup"><b className="text-blue-700">Here</b></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
