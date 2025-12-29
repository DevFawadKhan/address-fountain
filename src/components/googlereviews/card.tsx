import React from "react";

const reviews = [
  {
    id: 1,
    active: true,
    rating: 5,
    text: `Address mountain in Galaxy offers modern, luxury apartments with breathtaking hillside and valley views—perfect for serene and comfortable living.`,
    name: "Amir Liaqat",
    date: "09/02/2023",
  },
  {
    id: 2,
    active: false,
    rating: 4,
    text: `Address mountain in Galaxy offers modern, luxury apartments with breathtaking hillside and valley views—perfect for serene and comfortable living.`,
    name: "Amir Liaqat",
    date: "09/02/2023",
  },
];

const Stars = ({ count, active }) => (
  <div className="flex justify-center gap-1 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < count
            ? active
              ? "text-white"
              : "text-orange-400"
            : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

export default function StoriesOfSatisfaction() {
  return (
    <section className="w-full bg-[#f4fbff] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Stories Of <br /> Satisfaction
            </h2>
            <p className="text-gray-600 max-w-md mb-6">
              Where every story reflects our promise of perfection.
            </p>

            <button className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-md transition">
              Add A Review
              <span className="bg-white text-sky-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                +
              </span>
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex gap-6 overflow-x-auto pb-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className={`min-w-[280px] max-w-[300px] rounded-xl p-6 text-center shadow-lg transition
                ${
                  review.active
                    ? "bg-sky-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {/* Google Icon */}
                <div className="flex justify-center mb-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${
                      review.active
                        ? "bg-white text-sky-500"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    G
                  </div>
                </div>

                <Stars count={review.rating} active={review.active} />

                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    review.active ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {review.text}
                </p>

                <p className="font-semibold">{review.name}</p>
                <p
                  className={`text-xs ${
                    review.active ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
