const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-blue to-indigo p-4 shadow-lg">
      <div className="text-white font-bold text-xl">
        <a href="/" className="hover:text-indigo-200 transition-colors duration-300">
          PickMyFlights
        </a>
      </div>

      
      <div className="hidden sm:flex space-x-8 text-white font-medium">
        <a href="#href" className="hover:text-indigo-200 transition-colors duration-300">
          Company
        </a>
        <a href="#book" className="hover:text-indigo-200 transition-colors duration-300">
          BOOK
        </a>
        <a href="#my-trips" className="hover:text-indigo-200 transition-colors duration-300">
          MY TRIPS
        </a>
        <a href="#flight-status" className="hover:text-indigo-200 transition-colors duration-300">
          STATUS
        </a>
      </div>

      
      <div className="flex space-x-4">
        <a href="/signup" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-indigo-50 transition duration-300">
          Sign Up
        </a>
        <a href="/login" className="bg-indigo-500 text-white px-4 py-2 rounded-md border border-white hover:bg-indigo-700 transition duration-300">
          Log In
        </a>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="sm:hidden flex items-center">
        <button id="menu-toggle" className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
