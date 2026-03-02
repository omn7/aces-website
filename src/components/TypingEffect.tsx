'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
    words: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export default function TypingEffect({
    words,
    className = '',
    typingSpeed = 80,
    deletingSpeed = 45,
    pauseDuration = 1800,
}: TypingEffectProps) {
    const [displayed, setDisplayed] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayed(current.slice(0, displayed.length + 1));
                if (displayed.length + 1 === current.length) {
                    // Pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                setDisplayed(current.slice(0, displayed.length - 1));
                if (displayed.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {displayed}
            <span className="animate-pulse">|</span>
        </span>
    );
}
