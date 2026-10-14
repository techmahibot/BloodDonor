import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-gray-300 pt-24">

      {/* Emergency Bar */}
      <div className="bg-yellow-400 text-black py-10">
        <div className="max-w-7xl mx-auto px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div>
            <h3 className="font-bold text-xl mb-2">
              Emergency Blood Needed?
            </h3>
            <p className="text-base">
              Call our 24/7 helpline for immediate assistance
            </p>
          </div>

          <button className="bg-red-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-red-700 transition flex items-center gap-3 shadow-md">
            <i className="fas fa-phone"></i>
            Call Now: +91 94241 15963
          </button>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 lg:px-16 py-24 grid md:grid-cols-5 gap-20">

        {/* Brand Section (Wider) */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
            <i className="fas fa-droplet"></i>
            BloodDonor.in
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Connecting blood donors with those in need. Together, we save lives
            and build a stronger community through compassion and action.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-red-500 font-semibold mb-6 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#donors" className="hover:text-white transition">
                Find Donors
              </a>
            </li>
          </ul>
        </div>

        {/* Blood Groups */}
        <div>
          <h3 className="text-red-500 font-semibold mb-6 text-lg">
            Blood Groups
          </h3>
          <ul className="space-y-4">
            <li>A+</li>
            <li>B+</li>
            <li>O+</li>
            <li>AB+</li>
          </ul>
        </div>

        {/* Connect (Narrow Column) */}
        <div>
          <h3 className="text-red-500 font-semibold mb-6 text-lg">
            Connect
          </h3>

          <div className="flex space-x-6 text-xl">
            <i className="fab fa-facebook-f hover:text-white cursor-pointer transition"></i>
            <i className="fab fa-twitter hover:text-white cursor-pointer transition"></i>
            <i className="fab fa-instagram hover:text-white cursor-pointer transition"></i>
            <i className="fab fa-linkedin-in hover:text-white cursor-pointer transition"></i>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 py-8 text-center text-gray-400 text-sm">
        © 2026 BloodDonor.in. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;