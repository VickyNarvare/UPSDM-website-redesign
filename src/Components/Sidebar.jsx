import { useState } from 'react';
import { FaTimes, FaHome, FaInfoCircle, FaClipboardList, FaChartBar, FaHandshake, FaTrophy, FaDownload, FaEnvelope, FaUser, FaSignInAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuItems = [
        { id: 1, name: 'Home', icon: FaHome, color: 'from-cyan-500 to-blue-500', path: '#' },
        { id: 2, name: 'About', icon: FaInfoCircle, color: 'from-purple-500 to-pink-500', path: '#' },
        { id: 3, name: 'Scheme', icon: FaClipboardList, color: 'from-green-500 to-teal-500', path: '#' },
        { id: 4, name: 'Report', icon: FaChartBar, color: 'from-orange-500 to-red-500', path: '#' },
        { id: 5, name: 'Partners with us', icon: FaHandshake, color: 'from-indigo-500 to-purple-500', path: '#' },
        { id: 6, name: 'Success Story', icon: FaTrophy, color: 'from-yellow-500 to-orange-500', path: '#' },
        { id: 7, name: 'Download', icon: FaDownload, color: 'from-blue-500 to-cyan-500', path: '#' },
        { id: 8, name: 'Contact Us', icon: FaEnvelope, color: 'from-pink-500 to-rose-500', path: '#' },
        { id: 9, name: 'Candidate', icon: FaUser, color: 'from-teal-500 to-green-500', path: '#' },
        { id: 10, name: 'Login', icon: FaSignInAlt, color: 'from-red-500 to-pink-500', path: '#' },
    ];

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div 
                className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-black z-50 transform transition-transform duration-500 ease-out shadow-2xl ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="relative p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                UPSDM
                            </h2>
                            <p className="text-xs text-gray-400 mt-1">Navigation Menu</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:rotate-90 group"
                        >
                            <FaTimes className="text-lg group-hover:text-red-400 transition-colors" />
                        </button>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                </div>

                {/* Menu Items */}
                <div className="p-4 overflow-y-auto h-[calc(100%-120px)] custom-scrollbar">
                    <nav className="space-y-2">
                        {menuItems.map((item) => {
                            const IconComponent = item.icon;
                            const isHovered = hoveredItem === item.id;
                            
                            return (
                                <a
                                    key={item.id}
                                    href={item.path}
                                    className="block group"
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <div className={`
                                        relative overflow-hidden
                                        px-4 py-3.5 rounded-xl
                                        bg-white/5 hover:bg-white/10
                                        border border-white/10 hover:border-white/20
                                        transition-all duration-300
                                        ${isHovered ? 'translate-x-2 shadow-lg' : ''}
                                    `}>
                                        {/* Gradient background on hover */}
                                        <div className={`
                                            absolute inset-0 bg-gradient-to-r ${item.color}
                                            opacity-0 group-hover:opacity-10
                                            transition-opacity duration-300
                                        `}></div>

                                        {/* Shine effect */}
                                        <div className={`
                                            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                            -translate-x-full group-hover:translate-x-full
                                            transition-transform duration-700
                                        `}></div>

                                        {/* Content */}
                                        <div className="relative flex items-center gap-4">
                                            {/* Icon */}
                                            <div className={`
                                                w-10 h-10 rounded-lg
                                                bg-gradient-to-br ${item.color}
                                                flex items-center justify-center
                                                shadow-lg
                                                transform group-hover:scale-110 group-hover:rotate-6
                                                transition-all duration-300
                                            `}>
                                                <IconComponent className="text-white text-lg" />
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <span className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors duration-300">
                                                    {item.name}
                                                </span>
                                            </div>

                                            {/* Arrow */}
                                            <div className={`
                                                text-gray-500 group-hover:text-cyan-400
                                                transform ${isHovered ? 'translate-x-1' : ''}
                                                transition-all duration-300
                                            `}>
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-center text-xs text-gray-500">
                        © 2025 UPSDM. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #06b6d4, #3b82f6);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #0891b2, #2563eb);
                }
            `}</style>
        </>
    );
};

export default Sidebar;
