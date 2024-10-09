import React from 'react';
import Image from 'next/image'; // Import if you're using Next.js image optimization

const SearchForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full p-6 bg-white shadow-md rounded-md">
      {/* Left Side: Image and Business Name */}
      
      <div className="flex flex-col items-start lg:w-1/2 p-4">
        <h1 className="text-4xl font-bold text-blue-600 text-center font-sans-serif">
            PickMyFlights
          </h1>
        <Image 
          src="/images/plane.jpg" 
          alt="Travel Image" 
          width={500} 
          height={300} 
          className="rounded-lg mb-4"
        />
      </div>

      {/* Right Side: Flight Search Form */}
      <div className="lg:w-1/2 p-4">
        <h1 className="text-4xl font-bold text-blue-600 text-center font-sans-serif">
            Book your flight
          </h1>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Departure City */}
          <input type="text" placeholder="Departure City" className="p-3 border rounded-md" />

          {/* Destination City */}
          <input type="text" placeholder="Destination City" className="p-3 border rounded-md" />

          {/* Departure Date */}
          <input type="date" className="p-3 border rounded-md" />

          {/* Return Date */}
          <input type="date" className="p-3 border rounded-md" />

          {/* Passengers */}
          <select className="p-3 border rounded-md">
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            {/* More options */}
          </select>

          {/* Class */}
          <select className="p-3 border rounded-md">
            <option>Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>

          <button type="submit" className="col-span-2 p-3 bg-blue-600 text-white rounded-md">
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
