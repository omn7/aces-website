import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white shadow-xl rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl relative z-10">Contact Us</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
                        Have questions or want to collaborate? Reach out to us. We'd love to hear from you!
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-lg text-gray-600">
                            Whether you are a student looking for guidance, an alumni wanting to reconnect, or a company interested in collaboration, we are here for you.
                        </p>

                        <div className="space-y-6 mt-8">
                            <Card className="flex items-start p-6">
                                <div className="bg-emerald-50 p-3 rounded-xl mr-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                                    <p className="text-gray-600">
                                        Department of Computer Engineering<br />
                                        College Campus Building, Floor 2<br />
                                        City, State 12345
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-start p-6">
                                <div className="bg-emerald-50 p-3 rounded-xl mr-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600">
                                        General Inquiries: contact@aces.edu<br />
                                        Events: events@aces.edu
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-start p-6">
                                <div className="bg-emerald-50 p-3 rounded-xl mr-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-gray-600">
                                        +1 234 567 8900 (Mon-Fri, 9am-5pm)
                                    </p>
                                </div>
                            </Card>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Connect on Social Media</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
}
