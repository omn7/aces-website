'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('loading');
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );
            setStatus('success');
            formRef.current.reset();
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <div className="bg-gray-50 pt-28 pb-12 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white shadow-xl rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl relative z-10">Contact Us</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
                        Have questions or want to collaborate? Reach out to us — we&apos;d love to hear from you!
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mt-3">
                                Whether you are a student looking for guidance, an alumnus wanting to reconnect, or a company interested in collaboration — we are here for you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Card className="flex items-start p-6">
                                <div className="bg-emerald-50 p-3 rounded-xl mr-4 shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Department of Computer Engineering<br />
                                        Bharati Vidyapeeth's College of Engineering<br />
                                        Pune Lavale, Maharashtra
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-start p-6">
                                <div className="bg-emerald-50 p-3 rounded-xl mr-4 shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-gray-600">
                                        <a href="tel:+919146573033" className="hover:text-primary transition-colors">+91-9146573033</a>
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-start p-6">
                                <div className="bg-emerald-50 p-3 rounded-xl mr-4 shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600">
                                        <a href="mailto:acesbvcoel2012@gmail.com" className="hover:text-primary transition-colors">acesbvcoel2012@gmail.com</a>
                                    </p>
                                </div>
                            </Card>
                        </div>

                        {/* Social Media */}
                        <div className="pt-2">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Connect on Social Media</h3>
                            <div className="flex gap-4">
                                <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-colors duration-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors duration-300">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                <CheckCircle className="w-16 h-16 text-emerald-500" />
                                <h4 className="text-xl font-bold text-gray-900">Message Sent!</h4>
                                <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-emerald-700 transition-all"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        required
                                        className="w-full px-4 py-3 text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="reply_to"
                                        name="reply_to"
                                        required
                                        className="w-full px-4 py-3 text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                                        <XCircle className="w-4 h-4 shrink-0" />
                                        Something went wrong. Please try again or email us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-primary hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending…
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </Card>
                </div>
            </SectionWrapper>

            {/* Google Map Embed */}
            <div className="w-full h-56 sm:h-80">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.76455731533505!3d18.563074287381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbcf9e3b6f4d%3A0x9945d57c4b3b09a0!2sBharati%20Vidyapeeth%20College%20of%20Engineering%2C%20Lavale%2C%20Pune!5e0!3m2!1sen!2sin!4v1623000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BVCOE Pune Lavale Location"
                ></iframe>
            </div>
        </>
    );
}
