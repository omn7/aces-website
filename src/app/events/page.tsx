import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const UPCOMING_EVENTS = [
    {
        id: 1,
        title: 'Annual Tech Hackathon',
        date: 'Oct 15, 2026',
        time: '10:00 AM - 10:00 AM (Next Day)',
        location: 'Main Auditorium',
        description: 'Join us for 24 hours of coding, collaboration, and innovation. Build solutions to real-world problems and win exciting prizes.',
        link: '/events/hackathon'
    },
    {
        id: 2,
        title: 'AI & Machine Learning Workshop',
        date: 'Nov 05, 2026',
        time: '2:00 PM - 5:00 PM',
        location: 'Lab 4, CS Block',
        description: 'A hands-on workshop covering the basics of neural networks and implementing your first model using Python and TensorFlow.',
        link: '/events/ai-workshop'
    }
];

const PAST_EVENTS = [
    {
        id: 3,
        title: 'Web Development Bootcamp',
        date: 'Sep 10, 2026',
        time: '10:00 AM - 4:00 PM',
        location: 'Seminar Hall',
        description: 'A comprehensive bootcamp on modern web development techniques including React and Next.js.',
    },
    {
        id: 4,
        title: 'Alumni Network Meetup',
        date: 'Aug 22, 2026',
        time: '5:00 PM - 8:00 PM',
        location: 'Campus Cafe',
        description: 'An evening of networking and insights sharing with our distinguished alumni currently working in top tech companies.',
    },
    {
        id: 5,
        title: 'Cybersecurity Awareness Seminar',
        date: 'Jul 15, 2026',
        time: '11:00 AM - 1:00 PM',
        location: 'Virtual Event',
        description: 'Expert talks on the latest trends in cybersecurity and how to protect digital assets.',
    }
];

function EventCard({ event, isUpcoming = false }: { event: any, isUpcoming?: boolean }) {
    return (
        <Card className="flex flex-col h-full">
            <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                <span className="text-gray-400 font-medium">Event Image</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>

                {isUpcoming && event.link && (
                    <div className="mt-auto">
                        <Link
                            href={event.link}
                            className="inline-flex justify-center items-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
                        >
                            Register Now
                        </Link>
                    </div>
                )}
            </div>
        </Card>
    );
}

export default function EventsPage() {
    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Events</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our upcoming workshops, seminars, and hackathons, and browse through our past successful events.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {UPCOMING_EVENTS.map(event => (
                        <EventCard key={event.id} event={event} isUpcoming={true} />
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper alternate>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-gray-400 rounded-full"></span>
                    Past Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PAST_EVENTS.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
