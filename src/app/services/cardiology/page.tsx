import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";

export default function Cardiology() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section 1: Cardiology Introduction */}
        <div className="text-center mb-12 fadeInUp">
          <FaHeartbeat className="text-6xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Cardiology at Kumudu Hospital
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Cardiology is the branch of medicine that deals with disorders of
            the heart and the blood vessels. At Kumudu Hospital, we offer a full
            range of diagnostic, treatment, and surgical procedures, delivered
            by an expert team of cardiologists. From preventive care to advanced
            interventions, we are committed to improving your heart health.
          </p>
        </div>

        {/* Section 2: What is Cardiology? */}
        <div className="text-center mb-12 slideInLeft">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Cardiology?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Cardiology is a medical specialty focused on diagnosing and treating
            conditions related to the heart and blood vessels. Cardiologists are
            trained to assess and manage various heart conditions such as heart
            attacks, arrhythmias, heart failure, and congenital heart defects.
            Early diagnosis and timely treatment are crucial for managing these
            diseases and preventing life-threatening complications.
          </p>
        </div>

        {/* Section 3: Advanced Features in Cardiology */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Advanced Features and Technology
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At Kumudu Hospital, we use the latest advancements in cardiology
            technology to provide the best care possible. Our team of experts
            uses cutting-edge diagnostic tools such as MRI, CT scans, and EKG to
            evaluate heart function with precision. We also perform minimally
            invasive surgeries using robotic systems, ensuring faster recovery
            times and better outcomes. Our goal is to provide comprehensive,
            state-of-the-art care for every patient, at every stage of their
            heart health journey.
          </p>
        </div>

        {/* Section 4: Types of Cardiac Treatments */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Types of Cardiac Treatments We Offer
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li>
                <strong>Cardiac Catheterization:</strong> A procedure used to
                diagnose heart conditions by inserting a thin tube into the
                heart.
              </li>
              <li>
                <strong>Angioplasty:</strong> A surgical procedure to restore
                blood flow to the heart by unblocking coronary arteries.
              </li>
              <li>
                <strong>Coronary Artery Bypass Surgery:</strong> A surgical
                procedure to bypass blocked coronary arteries and improve blood
                flow to the heart.
              </li>
              <li>
                <strong>Pacemaker Implants:</strong> A small device implanted
                under the skin to help regulate abnormal heart rhythms.
              </li>
              <li>
                <strong>Heart Transplant:</strong> In cases of severe heart
                failure, a heart transplant may be the most viable option.
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="transform hover:scale-105 transition-all">
              <Image
                src="/cardiology-treatment.jpg"
                alt="Cardiology Treatment"
                width={700}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Section 5: Recommended Medicines */}
        <div className="text-center mb-12 fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Medications for Heart Health
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Managing heart conditions often requires medications in addition to
            lifestyle changes. At Kumudu Hospital, we prescribe medications
            tailored to each patient's condition, including:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li>
              <strong>Beta-blockers:</strong> Used to manage heart rate and
              blood pressure.
            </li>
            <li>
              <strong>ACE Inhibitors:</strong> Help relax blood vessels,
              improving blood flow.
            </li>
            <li>
              <strong>Statins:</strong> Reduce cholesterol levels to prevent
              heart disease.
            </li>
            <li>
              <strong>Blood Thinners:</strong> Reduce the risk of blood clots
              and stroke.
            </li>
            <li>
              <strong>Diuretics:</strong> Help reduce fluid buildup and ease the
              heart's workload.
            </li>
          </ul>
        </div>

        {/* Section 6: Cardiology Video Clips */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 fadeInUp">
            Watch Our Cardiology Treatments in Action
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Learn more about our advanced cardiology treatments and technologies
            by watching the videos below:
          </p>
        </div>

        {/* YouTube Video Clips */}
        <div className="space-y-6">
          {/* YouTube Video 1 */}
          <div className="relative w-full h-0 pb-[56.25%] mb-6">
            <iframe
              src="https://www.youtube.com/embed/Wu18mpI_62s"
              title="Cardiology Treatment Overview"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
          {/* YouTube Video 2 */}
          <div className="relative w-full h-0 pb-[56.25%] mb-6">
            <iframe
              src="https://www.youtube.com/embed/OWGXhg50EHI"
              title="Heart Surgery Insights"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 7: Contact & Consultation */}
        <div className="mt-16 text-center fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Book a Consultation
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Ready to take the next step in your heart health journey? Book a
            consultation with one of our expert cardiologists today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
