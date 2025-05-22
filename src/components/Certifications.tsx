import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 md:px-12 bg-gray-900 text-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cloud Practitioner */}
          <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6 hover:shadow-yellow-500 hover-float transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">
              AWS Certified Cloud Practitioner
            </h3>
            <p className="text-gray-300 text-sm">
              Validates foundational cloud knowledge and AWS services understanding.
              Issued by Amazon Web Services.
            </p>
          </div>

          {/* Solutions Architect Associate */}
          <div className="bg-gray-800 border border-cyan-400 rounded-lg p-6 hover:shadow-cyan-400 hover-float transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">
              AWS Certified Solutions Architect – Associate
            </h3>
            <p className="text-gray-300 text-sm">
              Demonstrates ability to design and deploy scalable, fault-tolerant systems on AWS.
              Issued by Amazon Web Services.
            </p>
          </div>
          {/* Oracle Certified Java Programmer */}
          <div className="bg-gray-800 border border-red-400 rounded-lg p-6 hover:shadow-red-400 hover-float transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-red-300">
            Oracle Certified Professional: Java SE 11 Developer
            </h3>
            <p className="text-gray-300 text-sm">
              Validates expertise in Java programming, including core language features and object-oriented principles.
              Issued by Oracle Corporation.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
