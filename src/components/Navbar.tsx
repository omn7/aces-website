import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="fixed w-full z-50 top-4 sm:top-6 px-4 flex justify-center">
            <nav className="w-full max-w-4xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-4 py-1.5 flex items-center justify-between transition-all">

                <Link href="/" className="pl-2 flex items-center gap-3">
                    <Image
                        src="/aceslogo.png"
                        alt="ACES Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain drop-shadow-sm -my-1"
                    />
                    <span className="text-2xl font-black text-red-600 tracking-tight hidden sm:block">
                        ACES
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-1">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/team">Team</NavLink>
                    <NavLink href="/events">Events</NavLink>
                    <NavLink href="/gallery">Gallery</NavLink>
                </div>

                <div className="hidden md:flex items-center pr-2">
                    <Link
                        href="/contact"
                        className="text-sm font-semibold bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Contact
                    </Link>
                </div>

                <div className="md:hidden flex items-center pr-2">
                    <button className="text-gray-800 hover:text-primary transition-colors focus:outline-none p-1.5 rounded-full hover:bg-gray-100">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
        >
            {children}
        </Link>
    );
}
