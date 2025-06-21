
import { Mail, Users, Heart, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Contact =() => {
  return (
    <div className="min-h-screen bg-foundation-gray-50">
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-foundation-gray-300 rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-foundation-gray-300 rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-foundation-gray-300 rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-foundation-gray-300 rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Need Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foundation-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-foundation-gray-300 rounded-lg focus:ring-2 focus:ring-foundation-red focus:border-foundation-red"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-foundation-red hover:bg-foundation-red/90 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
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

              {/* Quick Actions */}
              <div className="bg-foundation-navy text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-foundation-red hover:bg-foundation-red/90">
                    Make a Donation
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-foundation-navy">
                    Volunteer with Us
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-foundation-navy">
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
