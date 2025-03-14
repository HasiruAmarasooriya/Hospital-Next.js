import { FaBaby } from "react-icons/fa";
import Image from "next/image";

export default function Pediatrics() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1: Pediatrics Introduction */}
        <div className="text-center mb-12 fadeInUp">
          <FaBaby className="text-6xl text-yellow-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Pediatrics at Kumudu Hospital
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Pediatrics is the branch of medicine that deals with the medical
            care of infants, children, and adolescents. At Kumudu Hospital, we
            offer comprehensive services for children of all ages, from newborns
            to teenagers, with a focus on preventive care, treatment of
            illnesses, and managing chronic conditions.
          </p>
        </div>

        {/* Section 3: What is Pediatrics? */}
        <div className="text-center mb-12 slideInLeft">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Pediatrics?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Pediatrics is a specialized branch of medicine focused on the health
            and well-being of children. Pediatricians are trained to diagnose,
            treat, and prevent childhood diseases, developmental issues, and
            growth concerns. They are skilled in handling medical issues
            specific to children, including vaccinations, infections, and
            childhood diseases.
          </p>
        </div>

        {/* Section 4: Pediatric Care Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Pediatric Care Services
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our pediatric department offers a wide range of services tailored to
            the needs of children. From well-child checkups to emergency care,
            our team of pediatricians, nurses, and specialists are dedicated to
            providing the highest standard of care.
          </p>
        </div>

        {/* Section 5: Common Pediatric Treatments */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Common Pediatric Treatments
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li>
                <strong>Immunizations:</strong> Essential vaccines to protect
                your child from diseases.
              </li>
              <li>
                <strong>Growth and Development Monitoring:</strong> Tracking
                milestones and addressing delays.
              </li>
              <li>
                <strong>Pediatric Surgery:</strong> Minor surgeries for children
                such as circumcisions, hernia repairs, etc.
              </li>
              <li>
                <strong>Management of Asthma:</strong> Medication and strategies
                for managing childhood asthma.
              </li>
              <li>
                <strong>Infectious Disease Treatment:</strong> Managing
                infections like flu, ear infections, etc.
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="transform hover:scale-105 transition-all">
              <Image
                src="/pediatrics-treatment.jpg"
                alt="Pediatrics Treatment"
                width={700}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* YouTube Video Embed */}
        <div className="space-y-6">
          <div className="relative w-full h-0 pb-[56.25%] mb-6">
            <iframe
              src="https://www.youtube.com/embed/YnbcVw9Zm20"
              title="Neurorehabilitation Overview"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 6: Contact & Consultation */}
        <div className="mt-16 text-center fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Book a Consultation
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Ready to take the next step in your child's health? Book a
            consultation with one of our pediatric specialists today.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
