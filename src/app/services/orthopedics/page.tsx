import { FaBone } from "react-icons/fa";
import Image from "next/image";

export default function Orthopedics() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1: Orthopedics Introduction */}
        <div className="text-center mb-12 fadeInUp">
          <FaBone className="text-6xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Orthopedics at Kumudu Hospital
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Orthopedics is the branch of medicine that deals with the diagnosis,
            treatment, and prevention of musculoskeletal disorders. At Kumudu
            Hospital, our orthopedic specialists provide advanced care for
            conditions involving bones, joints, ligaments, tendons, and muscles,
            helping patients regain mobility and improve their quality of life.
          </p>
        </div>

        {/* Section 3: What is Orthopedics? */}
        <div className="text-center mb-12 slideInLeft">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Orthopedics?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Orthopedics is a medical specialty focused on the musculoskeletal
            system, including bones, joints, muscles, ligaments, tendons, and
            nerves. Orthopedic surgeons are experts in diagnosing and treating
            conditions such as fractures, arthritis, sports injuries, and spine
            disorders, using both surgical and non-surgical methods.
          </p>
        </div>

        {/* Section 4: Orthopedic Care Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Orthopedic Care Services
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At Kumudu Hospital, we offer a wide range of orthopedic services,
            from diagnostic imaging to advanced treatments for musculoskeletal
            conditions. Our team of orthopedic specialists works closely with
            patients to provide personalized care and ensure optimal recovery.
          </p>
        </div>

        {/* Section 5: Common Orthopedic Treatments */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Common Orthopedic Treatments
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li>
                <strong>Joint Replacement:</strong> Replacing damaged joints to
                improve mobility and reduce pain.
              </li>
              <li>
                <strong>Fracture Treatment:</strong> Techniques to stabilize and
                heal broken bones, including casts and surgery.
              </li>
              <li>
                <strong>Spinal Surgery:</strong> Treatment for spinal conditions
                such as herniated discs or deformities.
              </li>
              <li>
                <strong>Arthroscopy:</strong> A minimally invasive procedure for
                diagnosing and treating joint issues.
              </li>
              <li>
                <strong>Sports Medicine:</strong> Treating sports-related
                injuries and providing rehabilitation services.
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="transform hover:scale-105 transition-all">
              <Image
                src="/orthopedic-treatment.jpg"
                alt="Orthopedic Treatment"
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
              src="https://www.youtube.com/embed/q9j447yj7QU"
              title="Orthopedic Treatments Overview"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 6: Contact & Consultation */}
        <div className="mt-16 text-center fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Book an Orthopedic Consultation
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Take the first step toward improved mobility and pain-free living.
            Book a consultation with one of our orthopedic specialists today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
