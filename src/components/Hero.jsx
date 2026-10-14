import React from "react";
import heroImage from "../assets/hero-blood.png";

const Hero = () => {
  return (
    <section
    id="home"
    className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-10 lg:px-16 py-28 grid md:grid-cols-2 items-center gap-16">

        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Be a <span className="text-yellow-400">Hero</span><br />
            Donate Blood<br />
            Save Lives
          </h2>

          <p className="mt-8 text-lg text-red-100 max-w-xl leading-relaxed">
            Join India's largest blood donation community. Connect with verified
            donors, find blood in emergencies, and be the reason someone smiles today.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <button className="bg-yellow-400 text-black font-semibold px-7 py-3 rounded-full hover:bg-yellow-300 transition shadow-md">
              <i class="fa-solid fa-heart-circle-plus"></i> Become a Donor
            </button>

            <button className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-red-700 transition">
              <i class="fa-solid fa-magnifying-glass"></i> Find Blood
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Blood Donation Illustration"
            className="w-full max-w-lg object-contain opacity-90"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;