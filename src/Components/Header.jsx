import { useState, useEffect } from 'react';
import upgovt from '../assets/Photos/upgovt.png'
import UPSDMLogo from '../assets/Photos/UPSDM_Logo.svg'
import Sidebar from './Sidebar';
import { FaHome,FaRegCalendarAlt ,FaRegClock,FaReply ,FaVolumeUp  ,FaSitemap, FaBars} from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDay = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    };
    
    return (
        <>
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <header className='*:font-display'>
            <div
                className="hidden md:flex min-h-9 flex-col md:flex-row justify-around items-center gradient *:text-white py-2 md:py-0 px-4 md:px-0"
            >
                <div className="*:text-xs md:*:text-sm flex justify-center items-center gap-1 md:gap-2 flex-wrap">
                    <FaRegCalendarAlt className="hidden sm:block" />
                    <span id="day" className="hidden sm:inline">{formatDay(currentTime)},</span>
                    <span id="date" className="text-[10px] sm:text-xs md:text-sm">{formatDate(currentTime)}</span>
                    <span className="hidden sm:inline">|</span>
                    <FaRegClock className="hidden sm:block" />
                    <span id="time" className="text-[10px] sm:text-xs md:text-sm">{formatTime(currentTime)}</span>
                </div>

                <div className="flex gap-2 md:gap-4 items-center justify-center mt-2 md:mt-0 flex-wrap">
                    <FaReply className="text-xs md:text-base" />
                    <FaVolumeUp className="text-xs md:text-base" />
                    <FaSitemap className="text-xs md:text-base" />
                    <span className="font-bold text-xs md:text-base">A-</span>
                    <span className="font-bold text-xs md:text-base">A</span>
                    <span className="font-bold text-xs md:text-base">A+</span>
                    <span className="font-bold bg-[#ec811f] p-1 md:p-1.5 text-xs md:text-base">T</span>
                    <span className="font-bold bg-[#272727] p-1 md:p-1.5 text-xs md:text-base">T</span>
                    <span className="text-[10px] md:text-[14px] flex items-center gap-1">
                        <LiaLanguageSolid/>
                        <span className="hidden sm:inline">Language</span>
                    </span>
                </div>

            </div>
            <div className="min-h-20 md:h-27 flex flex-col md:flex-row items-center justify-around py-4 md:py-0 px-4">

                <div className="mx-2 md:mx-5 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-2">
                    <img
                        className="w-16 sm:w-20 md:w-26 h-auto object-cover rounded-full"
                        src={upgovt}
                        alt="UPSDM Logo"
                    />
                    <div className="text-center">
                        <span
                            className="text-sm sm:text-lg md:text-2xl lg:text-[30px] font-semibold bg-gradient-to-r from-[#30cfd0] to-[#330867] bg-clip-text text-transparent block"
                        >U.P. Skill Development Mission</span
                        >
                        <span
                            className="text-xs sm:text-base md:text-xl lg:text-2xl pt-1 md:pt-2 bg-gradient-to-r from-[#f52828] to-[#1e9684] bg-clip-text text-transparent block"
                        >उत्तर प्रदेश कौशल विकास मिशन</span
                        >
                    </div>
                </div>

                <div className="mt-4 md:mt-0">
                    <img
                        className="w-40 sm:w-52 md:w-64 lg:w-80 h-auto hidden lg:block"
                        src={UPSDMLogo}
                        alt=" UPSDM Logo"
                    />
                </div>
            </div>

            <nav className="w-full min-h-9 gradient flex flex-col lg:flex-row items-center px-4 lg:px-40 gap-2 py-2 lg:py-0 relative">
                <button 
                    className="lg:hidden self-end text-white mb-2 z-50 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <FaBars className="text-xl"/>
                </button>
                
                <div className="hidden lg:flex w-full lg:items-center lg:gap-2">
                    <a href="#" className="hidden lg:block"><FaHome className="fa fa-home text-[#ffbe00] text-[12px]"/></a>
                    <ul
                        className="flex flex-col lg:flex-row items-center justify-center gap-2 *:text-white *:text-[11px] md:*:text-[13px] *:font-normal w-full lg:w-auto"
                    >
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Home</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">About</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Scheme</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Report</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center text-nowrap py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Partners with us</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center text-nowrap py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Success Story</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Download</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center text-nowrap py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Contact Us</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Candidate</a></li>
                        <li className="hidden lg:block">|</li>
                        <li className="w-full lg:w-auto text-center py-1 lg:py-0"><a href="#" className="hover:text-[#ffbe00] transition-colors">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;