import React, { useEffect, useState } from "react";

const bloodGroups = ["All", "A+", "B+", "O+", "AB+", "O-", "A-", "B-"];

const DonorSection = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [searchCity, setSearchCity] = useState("");
  const [sortByAvailability, setSortByAvailability] = useState(false);
  const [requestedIds, setRequestedIds] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const mappedDonors = data.map((user, index) => ({
          id: user.id,
          name: user.name,
          city: user.address.city,
          bloodGroup:
            bloodGroups[(index % (bloodGroups.length - 1)) + 1],
          available: Math.random() > 0.3,
        }));

        setDonors(mappedDonors);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Derived filtering logic
  let filteredDonors = donors.filter((donor) => {
    const matchesGroup =
      selectedGroup === "All" ||
      donor.bloodGroup === selectedGroup;

    const matchesCity = donor.city
      .toLowerCase()
      .includes(searchCity.toLowerCase());

    return matchesGroup && matchesCity;
  });

  if (sortByAvailability) {
    filteredDonors = [...filteredDonors].sort(
      (a, b) => b.available - a.available
    );
  }

  const handleRequest = (id) => {
    if (!requestedIds.includes(id)) {
      setRequestedIds([...requestedIds, id]);
    }
  };

  return (
    <section
      id="donors"
      className="py-24 bg-gray-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Find Donors by Blood Group
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover available donors for each blood type in your area
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {/* Blood Group Filter */}
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="p-3 rounded-lg border shadow-sm"
          >
            {bloodGroups.map((group, index) => (
              <option key={index}>{group}</option>
            ))}
          </select>

          {/* Search by City */}
          <input
            type="text"
            placeholder="Search by city..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="p-3 rounded-lg border shadow-sm"
          />

          {/* Sort Toggle */}
          <button
            onClick={() =>
              setSortByAvailability(!sortByAvailability)
            }
            className="bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            {sortByAvailability
              ? <span className="flex items-center justify-center"><i class="fa-solid fa-check mr-2"></i>Sorted by Availability</span>
              : "Sort by Availability"}
          </button>

        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-lg font-semibold">
            Loading donors...
          </p>
        )}

        {/* Empty State */}
        {!loading && filteredDonors.length === 0 && (
          <p className="text-center text-gray-500">
            No donors found.
          </p>
        )}

        {/* Donor Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">
                {donor.name}
              </h3>

              <p className="text-gray-600 mt-2">
                City: {donor.city}
              </p>

              <p className="mt-2 font-semibold text-red-600">
                {donor.bloodGroup}
              </p>

              <p className="mt-2">
                Status:{" "}
                <span
                  className={
                    donor.available
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {donor.available
                    ? "Available"
                    : "Not Available"}
                </span>
              </p>

              <button
                disabled={!donor.available}
                onClick={() => handleRequest(donor.id)}
                className={`mt-4 w-full py-2 rounded-lg transition ${
                  requestedIds.includes(donor.id)
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {requestedIds.includes(donor.id)
                  ? <span className="flex items-center justify-center"><i class="fa-solid fa-circle-check mr-2"></i>Request Sent</span>
                  : "Request Help"}
              </button>
            </div>
          ))}
        </div>

        {/* Total Count */}
        {!loading && (
          <div className="text-center mt-12 font-semibold text-lg">
            Total Available Donors:{" "}
            {
              filteredDonors.filter(
                (d) => d.available
              ).length
            }
          </div>
        )}
      </div>
    </section>
  );
};

export default DonorSection;