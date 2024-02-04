"use client"
import { useEffect } from 'react';
import Homepage from "../components/homepage";

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hello');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Trigger the function
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <Homepage />
    </>
  );
}
