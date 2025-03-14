import { FaRadiationAlt } from "react-icons/fa";
import Image from "next/image";

export default function Radiology() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1: Radiology Introduction */}
        <div className="text-center mb-12 fadeInUp">
          <FaRadiationAlt className="text-6xl text-pink-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Radiology at Kumudu Hospital
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Radiology is a medical specialty that uses imaging techniques to
            diagnose and treat diseases. At Kumudu Hospital, we utilize advanced
            radiology technologies such as X-rays, CT scans, MRIs, and
            ultrasounds to provide accurate and timely diagnoses for our
            patients.
          </p>
        </div>

        {/* Section 3: What is Radiology? */}
        <div className="text-center mb-12 slideInLeft">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Radiology?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Radiology is the branch of medicine that focuses on the use of
            imaging technologies to examine the body's internal structures.
            Through radiological procedures, doctors can detect diseases,
            fractures, tumors, and other medical conditions that might not be
            visible otherwise. It plays a crucial role in the diagnosis and
            treatment of many medical conditions.
          </p>
        </div>

        {/* Section 4: Radiology Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Radiology Technologies
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Kumudu Hospital is equipped with state-of-the-art radiology tools,
            including digital X-rays, MRI machines, CT scanners, and ultrasound
            equipment. Our advanced technology allows us to capture highly
            detailed images of the body to assist in diagnosing and guiding
            treatment.
          </p>
        </div>

        {/* Section 5: Common Radiology Procedures */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Common Radiology Procedures
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li>
                <strong>X-rays:</strong> Used to examine bones, organs, and
                tissues for signs of damage or disease.
              </li>
              <li>
                <strong>CT Scan:</strong> A detailed imaging procedure that
                creates cross-sectional images of the body.
              </li>
              <li>
                <strong>MRI Scan:</strong> Uses magnetic fields to create
                detailed images of organs and tissues inside the body.
              </li>
              <li>
                <strong>Ultrasound:</strong> Uses sound waves to create
                real-time images of internal structures, often used in
                obstetrics and cardiology.
              </li>
              <li>
                <strong>Fluoroscopy:</strong> Real-time moving X-ray used for
                various diagnostic procedures, such as barium swallow tests.
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="transform hover:scale-105 transition-all">
              <Image
                src="/radiology-room.jpg"
                alt="Radiology Room"
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
              src="https://www.youtube.com/embed/DzpjRBLnKEM"
              title="Neurorehabilitation Overview"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 6: Contact & Consultation */}
        <div className="mt-16 text-center fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Book a Radiology Consultation
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Schedule an appointment with one of our expert radiologists to
            discuss your imaging needs or concerns.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
