import { FaIdCard, FaIndustry, FaChartLine, FaBook, FaTrophy } from 'react-icons/fa';

const QuickLinks = () => {
    const links = [
        {
            id: 1,
            title: 'Candidate Registration',
            icon: FaIdCard,
            gradient: 'from-[#ff7a59] via-[#f85f8d] to-[#d946a6]',
            shadowColor: 'shadow-pink-500/40',
            hoverGlow: 'group-hover:shadow-pink-500/60',
            link: '#'
        },
        {
            id: 2,
            title: 'Industrial Training Partner',
            icon: FaIndustry,
            gradient: 'from-[#ff9d3d] via-[#ff8833] to-[#ff7a2b]',
            shadowColor: 'shadow-orange-500/40',
            hoverGlow: 'group-hover:shadow-orange-500/60',
            link: '#'
        },
        {
            id: 3,
            title: 'Skill Mitra Portal',
            icon: FaChartLine,
            gradient: 'from-[#5ba84a] via-[#4a9539] to-[#3a7a2a]',
            shadowColor: 'shadow-green-600/40',
            hoverGlow: 'group-hover:shadow-green-600/60',
            link: '#'
        },
        {
            id: 4,
            title: 'Knowledge Partner',
            icon: FaBook,
            gradient: 'from-[#12c2e9] via-[#0db4d6] to-[#089bbe]',
            shadowColor: 'shadow-cyan-500/40',
            hoverGlow: 'group-hover:shadow-cyan-500/60',
            link: '#'
        },
        {
            id: 5,
            title: 'UPSDM Awards',
            icon: FaTrophy,
            gradient: 'from-[#456574] via-[#354f5e] to-[#263a47]',
            shadowColor: 'shadow-slate-700/40',
            hoverGlow: 'group-hover:shadow-slate-700/60',
            link: '#'
        }
    ];

    return (
        <div className="relative -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20 mb-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 md:gap-2 lg:gap-2.5">
                    {links.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                className="group relative flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Animated Glow Background */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-700 animate-pulse`}></div>
                                
                                {/* Main Circle Container */}
                                <div className="relative">
                                    {/* Outer Ring */}
                                    <div className="absolute -inset-2 bg-gradient-to-br from-white/40 to-white/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Circular Card */}
                                    <div
                                        className={`
                                            relative
                                            w-38 h-38 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52
                                            rounded-full 
                                            bg-gradient-to-br ${item.gradient}
                                            shadow-2xl ${item.shadowColor} ${item.hoverGlow}
                                            flex flex-col items-center justify-center
                                            transition-all duration-500 ease-out
                                            group-hover:scale-105
                                            cursor-pointer
                                            p-4 sm:p-4 md:p-5
                                            backdrop-blur-sm
                                            overflow-hidden
                                        `}
                                    >
                                        {/* Animated Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        
                                        {/* Shine Effect */}
                                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                                        
                                        {/* Floating Particles Effect */}
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 animation-delay-150"></div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center justify-center">
                                            {/* Icon Container */}
                                            <div className="mb-2 sm:mb-2 md:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                                <div className="relative">
                                                    {/* Icon Glow */}
                                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    <IconComponent className="relative text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl filter group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                                </div>
                                            </div>
                                            
                                            {/* Text */}
                                            <div className="text-center text-white">
                                                <h3 className="text-sm sm:text-xs md:text-sm lg:text-base font-bold text-wrap leading-tight drop-shadow-lg tracking-wide">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Inner Border */}
                                        <div className="absolute inset-3 rounded-full border border-white/20 opacity-60 group-hover:opacity-100 group-hover:border-white/40 transition-all duration-500"></div>
                                    </div>
                                </div>

                                {/* Bottom Label (Optional - Hidden by default) */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="px-4 py-1 bg-white/90 rounded-full shadow-lg">
                                        <p className="text-xs font-semibold text-gray-700">Click to Access</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;
