import { Mail, Users, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('Please select a subject'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        const response = await axios.post('http://localhost:3000/api/contact', values);
        toast.success(response.data.message || 'Message sent!');
        resetForm();
      } catch (error) {
        toast.error(error?.response?.data?.error || 'Failed to send message.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Toaster position="top-center" reverseOrder={false} />

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-green to-foundation-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with us to learn more about our programs, volunteer opportunities, or how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foundation-navy mb-6">Send us a Message</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...formik.getFieldProps('firstName')}
                      className={`w-full px-4 py-3 border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-foundation-gray-300'} rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red`}
                      placeholder="Your first name"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...formik.getFieldProps('lastName')}
                      className={`w-full px-4 py-3 border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-foundation-gray-300'} rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red`}
                      placeholder="Your last name"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                    className={`w-full px-4 py-3 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-foundation-gray-300'} rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red`}
                    placeholder="your.email@example.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    {...formik.getFieldProps('subject')}
                    className={`w-full px-4 py-3 border ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-foundation-gray-300'} rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red`}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Need Support</option>
                  </select>
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...formik.getFieldProps('message')}
                    className={`w-full px-4 py-3 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-foundation-gray-300'} rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red`}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-foundation-red hover:bg-foundation-red/90 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info Section (unchanged) */}
            <div className="space-y-8 animate-scale-in">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-foundation-navy mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-foundation-red text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foundation-navy mb-1">Email Us</h3>
                      <p className="text-foundation-gray-600">info@bestfoundation.org</p>
                      <p className="text-foundation-gray-600">support@bestfoundation.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-foundation-green text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foundation-navy mb-1">Main Office</h3>
                      <p className="text-foundation-gray-600">
                        Faisalabad, Punjab<br />
                        Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-foundation-navy text-white p-3 rounded-full">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foundation-navy mb-1">US Operations</h3>
                      <p className="text-foundation-gray-600">
                        Serving Pakistani communities<br />
                        across the United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-foundation-navy text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-foundation-red hover:bg-foundation-red/90">
                    Make a Donation
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white text-foundation-navy">
                    Volunteer with Us
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white text-foundation-navy">
                    Apply for Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
