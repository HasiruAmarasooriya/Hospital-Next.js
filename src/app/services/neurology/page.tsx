import { FaBrain } from "react-icons/fa";
import Image from "next/image";

export default function Neurology() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1: Neurology Introduction */}
        <div className="text-center mb-16 fadeInUp">
          <FaBrain className="text-6xl text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Neurology at Kumudu Hospital
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Neurology is a medical specialty that focuses on the diagnosis,
            treatment, and management of disorders of the nervous system. Our
            expert neurologists at Kumudu Hospital are equipped with the latest
            technology to offer top-tier care for patients with neurological
            diseases ranging from headaches to complex disorders like stroke,
            epilepsy, and neurodegenerative diseases.
          </p>
        </div>

        {/* Section 2: What is Neurology? */}
        <div className="text-center mb-12 slideInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Neurology?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Neurology is the branch of medicine concerned with the study and
            treatment of disorders of the nervous system, which includes the
            brain, spinal cord, and nerves. Neurologists specialize in
            diagnosing and treating conditions like stroke, multiple sclerosis,
            Parkinson’s disease, Alzheimer's, epilepsy, and migraines. Early
            detection and effective management are essential for improving the
            quality of life for those affected by neurological disorders.
          </p>
        </div>

        {/* Section 3: Neurorehabilitation Videos */}
        <div className="text-center mb-12 fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Neurorehabilitation at Kumudu Hospital
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Neurorehabilitation is a critical component of recovery for patients
            suffering from neurological disorders. At Kumudu Hospital, we
            provide comprehensive rehabilitation services, combining physical
            therapy, occupational therapy, and speech therapy to help patients
            regain their independence. Below are some video resources to
            showcase our neurorehabilitation treatments and success stories:
          </p>

          {/* YouTube Video Embed */}
          <div className="space-y-6">
            <div className="relative w-full h-0 pb-[56.25%] mb-6">
              <iframe
                src="https://www.youtube.com/embed/dV48gvV4tUM"
                title="Neurorehabilitation Overview"
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative w-full h-0 pb-[56.25%] mb-6">
              <iframe
                src="https://www.youtube.com/embed/qQBUI1-wRQE"
                title="Neurorehabilitation Overview"
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Section 4: Neurology Treatment Options */}
        <div className="text-center mb-12 fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Neurology Treatment Options
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our comprehensive neurology services include a wide range of
            treatments and interventions. We provide personalized treatment
            plans for each patient based on their diagnosis and condition. Some
            of our treatment options include:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li>
              <strong>Medication Management:</strong> We offer a variety of
              medications to manage neurological conditions such as anti-seizure
              drugs, anti-migraine medications, and Parkinson’s drugs.
            </li>
            <li>
              <strong>Neurorehabilitation:</strong> Our rehabilitation services
              focus on helping patients recover motor skills, speech, and
              cognitive functions after neurological events like stroke.
            </li>
            <li>
              <strong>Surgical Interventions:</strong> We offer minimally
              invasive surgeries for conditions like brain tumors, aneurysms,
              and deep brain stimulation for movement disorders.
            </li>
            <li>
              <strong>Psychotherapy & Counseling:</strong> For conditions like
              Alzheimer’s and Parkinson’s, we provide psychological support to
              help patients manage the emotional aspects of their illness.
            </li>
          </ul>
        </div>

        {/* Section 5: Contact & Consultation */}
        <div className="mt-16 text-center fadeInUp">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Book a Neurology Consultation
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Take control of your brain health today. Book a consultation with
            one of our expert neurologists.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
