"use client";

export default function Services() {
  const services = [
    { title: "Cardiology", description: "Advanced cardiac care and surgery." },
    { title: "Neurology", description: "Comprehensive neurological treatments." },
    { title: "Pediatrics", description: "Caring for children's health and well-being." },
    { title: "Radiology", description: "High-precision imaging and diagnostics." },
    { title: "Orthopedics", description: "Bone and joint care, surgeries, and therapies." },
    { title: "Emergency", description: "24/7 emergency and trauma services." },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
