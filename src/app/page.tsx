"use client";

import Image from "next/image";
import Footer from "../components/common/Footer.tsx"
import Navbar from "../components/common/Navbar.tsx"
import SearchForm from "../components/flight/SearchForm"

import { useState } from 'react';

export default function Home() {
  // Add state to handle loading, search results, and booking flow
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  return (
    
  <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow p-8 sm:p-20 w-full max-w-7xl mx-auto">
        <SearchForm/>
      </main>

      <Footer/>
    </div>
    
  );
};
