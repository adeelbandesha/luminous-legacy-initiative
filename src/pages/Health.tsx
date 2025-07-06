import { HeartPulse, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { motion } from "framer-motion";

const Health = () => {
  const stats = [
    {
      title: "Patients Treated",
      count: 412,
      period: "This Month",
      icon: <HeartPulse className="h-6 w-6" />,
      color: "green" as const,
    },
    {
      title: "Patients Treated",
      count: 1876,
      period: "This Year",
      icon: <HeartPulse className="h-6 w-6" />,
      color: "navy" as const,
    },
    {
      title: "Total Beneficiaries",
      count: 10920,
      period: "All Time",
      icon: <HeartPulse className="h-6 w-6" />,
      color: "gold" as const,
    },
  ];

  const galleryImages = [
    {
      src: "/images/Health2.jpeg",
      alt: "Healthcare worker assisting a patient in a wheelchair",
      caption: "Empowering mobility with wheelchair support and care",
    },
    {
      src: "/images/Health3.jpg",
      alt: "Community health screening event",
      caption: "Organizing free health screenings for early detection",
    },
    {
      src: "/images/Health4.jpg",
      alt: "Doctor conducting a maternal health checkup",
      caption: "Supporting maternal health with compassionate care",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-foundation-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-foundation-green to-foundation-navy text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-pattern opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Health Care Program
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Upgrading local health infrastructure for underserved rural communities through collaboration, compassion, and self-help.
            </p>
            <motion.a
              href="#learn-more"
              className="mt-6 inline-block bg-white text-foundation-navy font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-foundation-green hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Caring for Our Communities Section */}
      <section id="learn-more" className="py-20 bg-foundation-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-foundation-navy tracking-tight">
                Upgradation of Local Dispensary
              </h2>
              <p className="text-lg text-foundation-gray-700 leading-relaxed">
                Under the guidance of the Punjab Rural Support Program (PRSP), our community has initiated the up-gradation of the Zila Council Dispensary in Chak No. 485 GB into a fully equipped Model Health Center.
              </p>
              <p className="text-lg text-foundation-gray-700 leading-relaxed">
                The estimated cost of the project is PKR 3.5 million. The local community has contributed PKR 200,000. PRSP has committed to provide staff and equipment covering 80% of the cost. Construction has already begun with community funds.
              </p>
              <motion.div
                className="bg-foundation-red/10 border-l-4 border-foundation-red p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-foundation-red font-semibold text-lg">
                  Request for Support:
                </p>
                <p className="text-foundation-gray-700">
                  We appeal for your financial assistance to complete this critical healthcare project. Your contribution will bring essential medical services to a deserving rural population.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Animation */}
            <motion.div
              className="relative max-h-[400px] lg:max-h-[450px> overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://jpkmsuryasumirat.com/images/doctor-with-stethoscope-hands-hospital-background.jpg"
                alt="Doctor examining a patient in Pakistan"
                className="rounded-2xl shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact in Pictures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-foundation-navy mb-4 tracking-tight">
              Our Impact in Pictures
            </h2>
            <p className="text-xl text-foundation-gray-600 max-w-3xl mx-auto">
              Witness the transformative work of our health programs in communities across Pakistan.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transform group-hover:scale-105 group-hover:rounded-2xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Health Support Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-foundation-navy mb-4 tracking-tight">
              Health Support Process
            </h2>
            <p className="text-xl text-foundation-gray-600">
              Comprehensive care through strategic health services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 rounded-xl bg-foundation-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-foundation-green text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Community Screening
              </h3>
              <p className="text-foundation-gray-600">
                Regular health checkups and awareness camps to catch and treat conditions early.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-foundation-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Treatment & Medication
              </h3>
              <p className="text-foundation-gray-600">
                Our clinics and mobile units provide essential medications and treatments.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-foundation-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-foundation-navy text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Ongoing Care
              </h3>
              <p className="text-foundation-gray-600">
                Follow-ups and long-term support for chronic conditions and rehabilitation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
