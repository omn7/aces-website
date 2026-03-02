import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import { Target, Lightbulb, BookOpen, GraduationCap } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <div className="bg-gray-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About ACES</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Get to know the vision, mission, and the core of the Association of Computer Engineering Students.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-xl mb-6">
                            <Lightbulb className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600">
                            To be the premier student organization fostering a culture of innovation, technical excellence, and holistic development among computer engineering students. We envision a community where every student is equipped with the skills and networks needed to thrive in the ever-evolving tech industry.
                        </p>
                    </div>
                    <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                        <span className="text-gray-400 font-medium">Vision Illustration</span>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper alternate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                        <span className="text-gray-400 font-medium">Mission Illustration</span>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-xl mb-6">
                            <Target className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start">
                                <span className="text-primary mr-3">•</span>
                                Organize hands-on workshops and hackathons to bridge the gap between academic theory and industry practice.
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3">•</span>
                                Provide mentorship and guidance to students in exploring career paths and advanced technical fields.
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3">•</span>
                                Foster a strong alumni network and industry connections for better placement opportunities.
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Affiliation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <GraduationCap className="w-16 h-16 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Computer Engineering Department</h3>
                        <p className="text-gray-600 mb-4">
                            ACES functions under the direct guidance and support of the HoD and faculty members of the Computer Engineering department.
                        </p>
                    </Card>

                    <Card className="p-8 text-center">
                        <div className="flex justify-center mb-6">
                            <BookOpen className="w-16 h-16 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Faculty Coordinator</h3>
                        <div className="mt-4">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                            <h4 className="text-xl font-bold text-gray-900">Dr. Jane Doe</h4>
                            <p className="text-primary font-medium">Associate Professor & ACES Advisor</p>
                            <p className="text-gray-500 text-sm mt-2">Ph.D. in Computer Science</p>
                        </div>
                    </Card>
                </div>
            </SectionWrapper>
        </>
    );
}
