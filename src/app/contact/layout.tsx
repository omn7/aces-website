import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact ACES BVCOE — Get in Touch',
    description:
        'Contact ACES (Association of Computer Engineering Students) at Bharati Vidyapeeth\'s College of Engineering, Pune Lavale. Reach us for collaborations, event queries, or student support. Phone: +91-9146573033.',
    keywords: [
        'Contact ACES BVCOE',
        'ACES contact Pune',
        'Bharati Vidyapeeth\'s computer engineering contact',
        'BVCOE student association contact',
        'ACES email',
        'ACES phone number',
    ],
    alternates: { canonical: 'https://acesbvcoel.com/contact' },
    openGraph: {
        title: 'Contact ACES BVCOE — Association of Computer Engineering Students',
        description:
            'Have questions or want to collaborate with ACES? Reach out to us at Bharati Vidyapeeth\'s College of Engineering, Pune Lavale.',
        url: 'https://acesbvcoel.com/contact',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact ACES BVCOE' }],
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
