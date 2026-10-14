import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 lg:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-red-600 font-bold p-2 rounded-full">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>
          <h1 className="text-2xl font-bold tracking-wide">
            BloodDonor<span className="text-yellow-400">.in</span>
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-10 font-medium text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#donors" className="hover:text-yellow-300 transition">
              Find Donors
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
          <i class="fa-regular fa-heart"></i> Join Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;