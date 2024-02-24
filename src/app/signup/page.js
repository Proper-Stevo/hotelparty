"use client"
import React, { useState } from 'react';
import Link from "next/link";

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        password: '',
        email: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('User signed up successfully');
            // Redirect user or show success message
          } else {
            console.error('Signup failed:', await response.text());
            // Handle signup failure
          }
        } catch (error) {
          console.error('Signup failed:', error.message);
          // Handle signup failure
        }
      };
    return (
        <>
            <div className="flex">
                <div className="w-1/2 hidden sm:block">
                    <img src="\signup\welcome.jpg" alt="Your Photo" className="object-cover w-full h-screen" />
                </div>

                <div className="w-full sm:w-1/2 p-8 ">
                    <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
                            <input type="text" id="username" name="username" className="border w-3/4 p-2 rounded text-black" value={formData.username} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" id="name" name="name" className="border w-3/4 p-2 rounded text-black" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="border w-3/4 p-2 rounded text-black" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                            <input type="text" id="password" name="password" className="border w-3/4 p-2 rounded text-black" value={formData.password} onChange={handleChange} />
                        </div>


                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Sign Up</button>

                        <div className="mt-10">
                            <p>If you already have a log in...</p>
                            <Link href="/signin">
                                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Click Here!</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
