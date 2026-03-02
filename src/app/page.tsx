import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Users, Calendar, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        ></div>

        {/* Overlays for readability and style */}
        <div className="absolute inset-0 bg-black/85 z-10 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-semibold text-gray-400 mb-8 tracking-widest shadow-lg uppercase">
            Welcome to the future of computing
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tight leading-none drop-shadow-2xl">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-400 mb-4 tracking-widest uppercase">
              Association of
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-white to-emerald-500 bg-[length:200%_auto] animate-gradient pb-2 drop-shadow-sm">
              Computer Engineering
            </span>
            <span className="block text-white mt-2">
              Students
            </span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed font-light drop-shadow-md">
            Empowering innovation, collaboration, and technical excellence. Join a vibrant community of passionate tech enthusiasts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/events"
              className="group relative flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-primary hover:bg-primary-dark overflow-hidden transition-all shadow-[0_0_20px_rgba(21,128,61,0.5)] hover:shadow-[0_0_30px_rgba(21,128,61,0.7)] hover:-translate-y-0.5 border border-emerald-400/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/join"
              className="flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 shadow-lg transition-all"
            >
              Join Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <SectionWrapper alternate pattern id="about-preview">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About ACES</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            ACES is the official student organization of the Computer Engineering department. We bridge the gap between academic learning and industry practices by organizing modern workshops, competitive hackathons, seminars, and networking events.
          </p>
          <Link href="/about" className="text-primary font-semibold hover:text-primary-dark inline-flex items-center group">
            Discover our mission
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Statistics Section */}
      <SectionWrapper pattern>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            { icon: Calendar, color: "text-teal-500", bg: "bg-teal-100", count: "50+", label: "Events Organized" },
            { icon: Users, color: "text-emerald-500", bg: "bg-emerald-100", count: "300+", label: "Active Members" },
            { icon: Award, color: "text-purple-500", bg: "bg-purple-100", count: "20+", label: "Workshops & Seminars" }
          ].map((stat, i) => (
            <Card key={i} className="p-8 group">
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-2xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.count}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Upcoming Event Highlight */}
      <SectionWrapper alternate>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Featured Event</h2>
              <p className="text-gray-500">Don't miss out on what's happening next.</p>
            </div>
            <Link href="/events" className="text-primary font-semibold hover:text-primary-dark hidden sm:flex items-center group">
              View all events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Card className="flex flex-col md:flex-row group overflow-hidden border-0 bg-white">
            <div className="md:w-5/12 bg-gradient-to-br from-primary to-emerald-400 h-64 md:h-auto relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-white/90 font-bold text-2xl z-10">Hackathon 2026</span>
            </div>
            <div className="p-8 md:p-10 md:w-7/12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 mb-4 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-4 h-4" />
                Oct 15, 2026 • 10:00 AM
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Annual Tech Hackathon</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join us for 24 hours of coding, collaboration, and innovation. Build solutions to real-world problems and win exciting prizes while networking with industry experts.
              </p>
              <div>
                <Link
                  href="/events/hackathon"
                  className="inline-flex justify-center items-center px-6 py-3 font-semibold rounded-full text-white bg-gray-900 hover:bg-primary shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/events" className="text-primary font-semibold hover:text-primary-dark flex justify-center items-center group">
              View all events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
