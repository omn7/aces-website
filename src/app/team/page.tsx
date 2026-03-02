import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Linkedin, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TEAM_MEMBERS = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'President',
        linkedin: '#',
    },
    {
        id: 2,
        name: 'Sarah Williams',
        role: 'Vice President',
        linkedin: '#',
    },
    {
        id: 3,
        name: 'Michael Chen',
        role: 'Technical Head',
        linkedin: '#',
    },
    {
        id: 4,
        name: 'Emily Davis',
        role: 'Event Coordinator',
        linkedin: '#',
    },
    {
        id: 5,
        name: 'David Wilson',
        role: 'Public Relations',
        linkedin: '#',
    },
    {
        id: 6,
        name: 'Jessica Taylor',
        role: 'Treasurer',
        linkedin: '#',
    },
    {
        id: 7,
        name: 'Ryan Martinez',
        role: 'Web Master',
        linkedin: '#',
    },
    {
        id: 8,
        name: 'Olivia Thomas',
        role: 'Creative Head',
        linkedin: '#',
    }
];

export default function TeamPage() {
    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Meet Our Team</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                        The dedicated individuals working tirelessly to make ACES a success.
                    </p>

                    {/* Faculty Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 border-b border-gray-200 pb-16">

                        {/* Prof. Tejal Patil */}
                        <div className="flex flex-col items-center text-center group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-32 h-32 bg-gray-100 rounded-full mb-4 overflow-hidden relative shadow-inner ring-4 ring-emerald-50">
                                {/* Replace with <Image src="..." /> when image is available */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Photo</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">Prof. Tejal Patil</h3>
                            <p className="text-emerald-600 font-semibold text-base mb-4">Secretary</p>
                            <div className="relative">
                                <Quote className="w-6 h-6 text-emerald-100 absolute -top-3 -left-2 -z-10 rotate-180" />
                                <p className="text-gray-600 italic leading-relaxed text-sm">
                                    "Empowering students to achieve their full potential through dedication, discipline, and continuous learning."
                                </p>
                            </div>
                        </div>

                        {/* Dr. U. C. Patkar (Moved to Middle) */}
                        <div className="flex flex-col items-center text-center group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative lg:-top-6 z-10">
                            <div className="w-40 h-40 bg-gray-100 rounded-full mb-4 overflow-hidden relative shadow-inner ring-4 ring-emerald-100 shadow-emerald-100/50">
                                {/* Replace with <Image src="..." /> when image is available */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-lg">Photo</div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">Dr. U. C. Patkar</h3>
                            <p className="text-emerald-600 font-bold text-lg mb-4">Chairman</p>
                            <div className="relative">
                                <Quote className="w-8 h-8 text-emerald-100 absolute -top-4 -left-3 -z-10 rotate-180" />
                                <p className="text-gray-600 italic leading-relaxed text-sm font-medium">
                                    "Leading our department towards technical brilliance and academic success for a better tomorrow."
                                </p>
                            </div>
                        </div>

                        {/* Prof. Kumkum Bala */}
                        <div className="flex flex-col items-center text-center group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-32 h-32 bg-gray-100 rounded-full mb-4 overflow-hidden relative shadow-inner ring-4 ring-emerald-50">
                                {/* Replace with <Image src="..." /> when image is available */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Photo</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">Prof. Kumkum Bala</h3>
                            <p className="text-emerald-600 font-semibold text-base mb-4">Vice-Chairman</p>
                            <div className="relative">
                                <Quote className="w-6 h-6 text-emerald-100 absolute -top-3 -left-2 -z-10 rotate-180" />
                                <p className="text-gray-600 italic leading-relaxed text-sm">
                                    "Fostering a culture of innovation and excellence within the computer engineering community."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member) => (
                        <Card key={member.id} className="text-center group">
                            <div className="p-6">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Photo</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-[#0A66C2] transition-colors"
                                    aria-label={`LinkedIn profile for ${member.name}`}
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
