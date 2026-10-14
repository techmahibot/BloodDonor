import React from "react";

const stats = [
  {
    icon: "fa-users",
    value: "1,250",
    label: "Registered Donors",
    color: "text-red-600",
  },
  {
    icon: "fa-heart-pulse",
    value: "380",
    label: "Lives Saved",
    color: "text-red-600",
  },
  {
    icon: "fa-notes-medical",
    value: "450",
    label: "Blood Requests",
    color: "text-green-600",
  },
  {
    icon: "fa-location-dot",
    value: "28",
    label: "Cities Covered",
    color: "text-cyan-500",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-10 lg:px-16">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-10 text-center transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`text-4xl mb-6 ${item.color}`}>
                <i className={`fas ${item.icon}`}></i>
              </div>

              <h3 className="text-4xl font-bold text-red-600">
                {item.value}
              </h3>

              <p className="text-gray-600 mt-3 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;