export default function SectionWrapper({
    children,
    className = "",
    alternate = false,
    pattern = false,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    alternate?: boolean;
    pattern?: boolean;
    id?: string;
}) {
    const bgClass = alternate ? "bg-gray-50/50" : "bg-white";
    const patternClass = pattern ? (alternate ? "bg-dot-pattern" : "bg-grid-pattern") : "";

    return (
        <section
            id={id}
            className={`py-20 relative overflow-hidden ${bgClass} ${patternClass} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
}
