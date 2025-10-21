import stateMinister from '../assets/Photos/stateminister.jpg';
import hairOm from '../assets/Photos/PSSirPhoto_hariOm.png';
import amd from '../assets/Photos/amd.jpg';
import md from '../assets/Photos/md.jpeg';
const WelcomeSection = () => {
    const leaders = [
        {
            id: 1,
            name: 'Shri Kpil Dev Aggarwal',
            position: "Hon'ble State Minister",
            image: stateMinister,
        },
        {
            id: 2,
            name: 'Dr. Hari Om, IAS',
            position: 'Principal Secretary',
            image: hairOm,
        },
        {
            id: 3,
            name: 'Shri. Pulkit Khare, IAS',
            position: 'Mission Director',
            image: md
        },
        {
            id: 4,
            name: 'Miss. Priya Singh, PCS',
            position: 'Addl. Mission Director',
            image: amd
        },
    ];

    return (
        <section className="py-16 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Welcome Text */}
                    <div className="text-center lg:text-left space-y-6">
                        {/* Heading */}
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight text-center">
                                <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Welcome
                                </span>
                                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                                    To
                                </span>
                                <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                                    U.P. Skill Development Mission
                                </span>
                            </h1>
                        </div>

                        {/* Decorative Line with Animation */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-80">
                                <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full"></div>
                                <div className="absolute top-0 left-0 h-1 w-1/3 bg-gradient-to-r from-white/80 to-transparent rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200">
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                To Train all eligible youth in <span className="font-semibold text-cyan-700">14-35 age group</span> in the trades of their preference, provide facilities for acquisition
                                and upgradation of skills of the unskilled and semi skilled workforce, enabling Provision for the vulnerable
                                section e.g. women, pwd and minorities. <span className="font-semibold text-orange-600">30% targets are earmarked for women; 20% for minorities</span>, provide
                                trainings in <span className="font-semibold text-indigo-600">NSQF (National Skills Qualifications Framework)</span> compliant courses only.
                            </p>
                        </div>

                        {/* Stats or Additional Info */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center p-3 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200">
                                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">14-35</div>
                                <div className="text-xs text-gray-600 mt-1">Age Group</div>
                            </div>
                            <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">30%</div>
                                <div className="text-xs text-gray-600 mt-1">Women</div>
                            </div>
                            <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">20%</div>
                                <div className="text-xs text-gray-600 mt-1">Minorities</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Leadership Grid */}
                    <div className="grid grid-cols-2 gap-6 sm:gap-8">
                        {leaders.map((leader, index) => (
                            <div
                                key={leader.id}
                                className="group relative"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

                                {/* Main Card */}
                                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-[1.5rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 transform hover:-translate-y-3">
                                    {/* Image Container */}
                                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="relative w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 transform group-hover:scale-105"
                                        />

                                        {/* Gradient Overlays */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>


                                        {/* Animated Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out skew-x-12"></div>
                                    </div>

                                    {/* Info Section */}
                                    <div className="relative p-5 sm:p-6">
                                        {/* Decorative Top Border */}
                                        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            {/* Name */}
                                            <h3 className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-cyan-700 group-hover:via-blue-700 group-hover:to-purple-700 transition-all duration-500 leading-tight">
                                                {leader.name}
                                            </h3>

                                            {/* Divider Line */}
                                            <div className="flex items-center gap-3">
                                                <div className="h-[2px] w-8 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                                                <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-300/50 to-transparent"></div>
                                            </div>

                                            {/* Position */}
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0 w-1 h-12 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full"></div>
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                                                        {leader.position}
                                                    </p>
                                                    <div className="mt-2 flex gap-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full"></div>
                                    </div>

                                    {/* Premium Border */}
                                    <div className="absolute inset-0 rounded-[1.5rem] border border-white/50 group-hover:border-white/80 transition-colors duration-500"></div>
                                    <div className="absolute inset-0 rounded-[1.5rem] border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-500/50 group-hover:via-blue-500/50 group-hover:to-purple-500/50 transition-all duration-700"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
