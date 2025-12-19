import React from "react";
import ButtonSecondary from "../ui/ButtonSecondary";
import AmenityCard from "./AmenityCard";

// Amenity data with icons represented as colored circles (matching the design)
const amenities = [
  { id: 1, label: "Luxury Rooms" },
  { id: 2, label: "Fitness Center" },
  { id: 3, label: "Rooftop Restaurant" },
  { id: 4, label: "High-Speed Wi-Fi" },
  { id: 5, label: "Dedicated & Monitored Entrance" },
  { id: 6, label: "Conference Rooms" },
  { id: 7, label: "24-Hour Front Desk" },
  { id: 8, label: "24/7 Security Surveillance" },
];

const AmenitiesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="w-full lg:w-[90%] 2xl:w-[75%] mx-auto px-4 xs:px-6 sm:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 xs:mb-14 sm:mb-16 md:mb-20 gap-6 lg:gap-12">
          {/* Left: Title */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-gray-900 leading-tight">
              Discover Our <br className="hidden sm:block" />
              Premium Amenities
            </h2>
          </div>

          {/* Right: Description & Button */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <p className="text-gray-600 max-w-xs lg:pr-16 mb-4 text-center lg:text-left">
              Experience a lifestyle where modern architecture meets effortless
              comfort. Our world-class amenities redefine
            </p>
            <ButtonSecondary>See More</ButtonSecondary>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 xs:gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {amenities.map((amenity, index) => {
            // Row 1 (0-3): Flat, Elevated, Flat, Elevated
            // Row 2 (4-7): Elevated, Flat, Elevated, Flat
            const row = Math.floor(index / 4);
            const isOddPosition = index % 2 === 1;
            const isElevated = row % 2 === 0 ? isOddPosition : !isOddPosition;
            return (
              <AmenityCard
                key={amenity.id}
                label={amenity.label}
                isElevated={isElevated}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
