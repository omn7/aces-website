import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

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
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        The dedicated individuals working tirelessly to make ACES a success.
                    </p>
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
