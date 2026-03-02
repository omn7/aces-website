export default function Card({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`glass rounded-2xl border border-white/60 shadow-lg shadow-gray-200/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/50 hover:border-emerald-100 transition-all duration-300 overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
}
