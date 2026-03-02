import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-600 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ACES</h3>
                    <p className="text-sm">
                        Association of Computer Engineering Students. Empowering innovation, collaboration, and technical excellence.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
                        <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>Department of Computer Engineering, College Campus</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>contact@aces.edu</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>+1 234 567 8900</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-200 text-sm text-center">
                &copy; {new Date().getFullYear()} Association of Computer Engineering Students. All rights reserved.
            </div>
        </footer>
    );
}
