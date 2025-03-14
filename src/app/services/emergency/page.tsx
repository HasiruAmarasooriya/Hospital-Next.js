import { FaAmbulance } from "react-icons/fa";
import Image from "next/image";

export default function Emergency() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1: Emergency Care Introduction */}
        <div className="text-center mb-12 fadeInUp">
          <FaAmbulance className="text-6xl text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Emergency Care at Kumudu Hospital
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our emergency department is equipped to provide immediate care for life-threatening conditions. At Kumudu
            Hospital, our skilled team of doctors, nurses, and specialists are available 24/7 to address all emergencies,
            ensuring rapid treatment and stabilization for patients in critical conditions.
          </p>
        </div>

        {/* Section 3: What is Emergency Care? */}
        <div className="text-center mb-12 slideInLeft">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Emergency Care?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Emergency care involves the immediate treatment of conditions that threaten the life or well-being of an
            individual. It requires fast, specialized care to stabilize patients and manage acute health conditions such
            as trauma, heart attacks, strokes, and more.
          </p>
        </div>

        {/* Section 4: Emergency Care Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Emergency Care Services
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Kumudu Hospital's emergency department provides comprehensive services, including trauma care, cardiac care,
            pediatric emergencies, stroke management, and more. Our team is trained to handle a wide variety of emergencies
            with speed and precision.
          </p>
        </div>

        {/* Section 5: Common Emergency Care Treatments */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Common Emergency Care Treatments
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li><strong>Trauma Care:</strong> Immediate care for injuries caused by accidents, falls, or other trauma.</li>
              <li><strong>Cardiac Emergencies:</strong> Immediate treatment for heart attacks, arrhythmias, and other heart-related conditions.</li>
              <li><strong>Stroke Management:</strong> Rapid response and treatment for patients experiencing a stroke.</li>
              <li><strong>Pediatric Emergencies:</strong> Specialized care for children in urgent medical conditions.</li>
              <li><strong>Respiratory Emergencies:</strong> Treatment for conditions such as asthma attacks, COPD flare-ups, etc.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="transform hover:scale-105 transition-all">
              <Image
                src="/emergency-care.jpg"
                alt="Emergency Care"
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
              src="https://www.youtube.com/embed/9PjWLStxWCc"  // Replace this link with an appropriate emergency care video
              title="Emergency Care Overview"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 6: Contact & Consultation */}
        <div className="mt-16 text-center fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Need Emergency Care? Contact Us
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            If you or a loved one requires urgent medical attention, don't hesitate to visit our emergency department.
            We are ready to assist you at any moment.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all">
            Call for Emergency Help
          </button>
        </div>
      </div>
    </section>
  );
}
