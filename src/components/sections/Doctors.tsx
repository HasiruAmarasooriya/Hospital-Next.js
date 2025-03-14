"use client";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Hasiru Amarasooriya",
      specialization: "Cardiologist",
      img: "/images/docter1.png",
    },
    {
      name: "Dr. Kumudu Perera",
      specialization: "Neurologist",
      img: "/images/docter2.png",
    },
    {
      name: "Dr. Sanjeewa Fernando",
      specialization: "Pediatrician",
      img: "/images/doctor3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-10">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
              <img src={doctor.img} alt={doctor.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{doctor.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
