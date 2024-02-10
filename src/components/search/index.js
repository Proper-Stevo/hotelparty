"use client"

import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkInDate: '',
    checkOutDate: '',
    guestNumber: '',
    roomNumber: ''
  });

  // Ensure guests can't be 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <h1 className='text-2xl font-bold bg-white text-black'>Welcome to your next adventure!</h1>
      
        <form onSubmit={handleSubmit}>
          <div className='bg-white text-black py-2 grid grid-cols-2'>
          <div className='border border-black rounded-xl col-span-2'>
            <label htmlFor="location">Where:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className='border border-black rounded-xl'>
            <label htmlFor="checkInDate">Check-in:</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className='border border-black rounded-xl'>
            <label htmlFor="checkOutDate">Check-out:</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className='border border-black rounded-xl'>
            <label htmlFor="guestNumber">Guests:</label>
            <input
              type="number"
              id="guestNumber"
              name="guestNumber"
              value={formData.guestNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className='border border-black rounded-xl'>
            <label htmlFor="roomNumber">Rooms:</label>
            <input
              type="number"
              id="roomNumber"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit"
            className='bg-blue-700 text-white px-2 py-2 rounded-full'
          >Search</button>
          </div>
        </form>
      
    </>
  );
};

export default BookingForm;
