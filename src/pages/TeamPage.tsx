// src/TeamPage.tsx
import { useState } from 'react';
import type { FC, SyntheticEvent } from 'react';
// import { Link } from 'react-router-dom'; 
import { 
    Users, Medal, HeartHandshake, Zap, Smile, X, CheckCircle, 
    Mail, Phone, MapPin, Twitter, Facebook, Instagram // <-- NEW Icons for Footer
} from 'lucide-react';

// 1. TYPE DEFINITIONS & UTILITY COMPONENTS 

interface TeamMember {
    name: string;
    role: string;
    image: string;
    unit: string;
}

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className: string;
    fallback?: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ 
    src, 
    alt, 
    className, 
    fallback = "https://via.placeholder.com/400x300/9333EA/FFFFFF?text=GFM+Youth" 
}) => (
    <img
        src={src}
        alt={alt}
        className={className}
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            (e.target as HTMLImageElement).onerror = null; 
            (e.target as HTMLImageElement).src = fallback;
        }}
    />
);

// 2. STATIC DATA 

const ALL_TEAM_MEMBERS: TeamMember[] = [
    // Core Leadership Team
    { name: 'WAKAWA HYELZIRA', role: 'WEB DEVELOPER GFM YOUTHS', image: '/src/assets/images/hyelzira.jpg', unit: 'Core Leadership' },
    { name: 'AMBRUCE ISRAEL', role: 'MEDIA DIRECTOR GFM YOUTHS', image: '/src/assets/images/bruce.jpg', unit: 'Core Leadership' },
    { name: 'AMBRUCE EMILY', role: 'EDU. ADMIN GFM YOUTHS', image: '/src/assets/images/emie.jpg', unit: 'Core Leadership' },
    { name: 'BITRUS JOSHUA DANG', role: 'CREATIVE DESIGNER GFM YOUTHS', image: '/src/assets/images/joshua.jpg', unit: 'Core Leadership' },
    
    // Key Department Heads
    { name: 'TANGKAT BAMAIYI', role: 'EVERYTHING GODLY DATING ADMIN', image: '/src/assets/images/bamaiyi.jpg', unit: 'Godly Dating' },
    { name: 'DAUDA AIBESI', role: 'EVERYTHING PEOTRY ADMIN', image: '/src/assets/images/aibe.jpg', unit: 'Peotry Ministry' },
    { name: 'TEDDY RICHARDS', role: 'EVERYTHING SPORTS ADMIN', image: '/src/assets/images/rich.jpg', unit: 'Sports Dept.' },
    { name: 'WOPHIL NENLA', role: 'EVERYTHING FASHION ADMIN ', image: '/src/assets/images/nenla.jpg', unit: 'Fashion Dept.' },
    
    // Other Team Leads
    { name: 'SARAH CHIMA', role: 'EVERYTHING MOVIES ADMIN', image: '/src/assets/images/leader-mahlule.jpg', unit: 'Choir & Music' },
    { name: 'SAMUEL UCHE', role: 'PRAYER COORDINATOR', image: '/src/assets/images/leader-mahlule.jpg', unit: 'Prayer Team' },
    { name: 'DEBORAH MUSA', role: 'USHERS LEAD', image: '/src/assets/images/leader-mahlule.jpg', unit: 'Service & Protocol' },
    { name: 'FEMI JAMES', role: 'EX USHERS LEAD', image: '/src/assets/images/leader-mahlule.jpg', unit: 'Service & Protocol' },
];

const TEAM_UNITS = [
    { title: "Core Leadership", icon: Medal, description: "Setting the vision and steering the entire youth ministry forward." },
    { title: "Tech & Media", icon: Zap, description: "Handling all digital communications, visual production, and technical needs." },
    { title: "Welfare & Outreach", icon: HeartHandshake, description: "Caring for members and spearheading community service initiatives." },
    { title: "Service & Protocol", icon: Smile, description: "Ensuring smooth running of services, hospitality, and order." },
    // NOTE: The units below are referenced in ALL_TEAM_MEMBERS but not in the TEAM_UNITS list above.
];

// 3. TEAM CARD COMPONENT

interface TeamCardProps {
    member: TeamMember;
}

const TeamCard: FC<TeamCardProps> = ({ member }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden w-full h-60 bg-gray-200 flex items-center justify-center">
            <div className="absolute inset-0 bg-fuchsia-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                fallback={`https://via.placeholder.com/400x300/F0F0F0/888888?text=${member.name.split(' ')[0]}`}
            />
        </div>
        
        <div className="p-5 text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-fuchsia-600 text-sm font-medium uppercase">{member.role}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">
                {member.unit}
            </span>
        </div>
    </div>
);


// 4. MODAL COMPONENTS 

interface SuccessModalProps {
    onClose: () => void;
}

const SuccessModal: FC<SuccessModalProps> = ({ onClose }) => (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4"
        onClick={onClose}
    >
        <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-8 text-center transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
        >
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Received!</h3>
            <p className="text-gray-600">
                Thank you for applying. A unit leader will be in touch soon!
            </p>
        </div>
    </div>
);

interface VolunteerModalProps {
    onClose: () => void;
    onSuccess: () => void;
}

const VolunteerModal: FC<VolunteerModalProps> = ({ onClose, onSuccess }) => {
    // Placeholder function for handling form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulating form submission logic here
        onClose(); 
        onSuccess(); 
    };

    return (
        // Modal Overlay
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4"
            onClick={onClose}
        >
            {/* Modal Content */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header and Close Button */}
                <div className="sticky top-0 bg-fuchsia-700 text-white p-5 flex justify-between items-center z-10 rounded-t-xl">
                    <h2 className="text-2xl font-bold">Join the GFM Youth Team</h2>
                    <button 
                        onClick={onClose} 
                        className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Close form"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Body Content - Placeholder Form */}
                <div className="p-6">
                    <p className="text-gray-700 mb-6">
                        Fill out the form below to let us know where your passion and skills lie. We'll connect you with the appropriate unit leader!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" id="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500" />
                        </div>
                        <div>
                            <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">Preferred Unit</label>
                            <select id="unit" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 bg-white">
                                <option value="">Select a Unit...</option>
                                <option value="Tech & Media">Tech & Media</option>
                                <option value="Welfare & Outreach">Welfare & Outreach</option>
                                <option value="Service & Protocol">Service & Protocol</option>
                                <option value="Choir & Music">Choir & Music</option>
                                <option value="Dance Ministry">Dance Ministry</option>
                                <option value="Prayer Team">Prayer Team</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself (Optional)</label>
                            <textarea id="message" rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500"></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-6 py-3 bg-fuchsia-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-lg text-lg"
                        >
                            Submit Application <HeartHandshake className="w-5 h-5 ml-2" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// 5. MAIN TEAM PAGE COMPONENT 

const TeamPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleSuccess = () => {
        setIsSuccessModalOpen(true);
        setTimeout(() => {
            setIsSuccessModalOpen(false);
        }, 2000);
    };

    const coreTeam = ALL_TEAM_MEMBERS.filter(m => m.unit === 'Core Leadership');
    const otherTeam = ALL_TEAM_MEMBERS.filter(m => m.unit !== 'Core Leadership');

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* 1. HEADER (Hero Section) */}
            <section className="relative **bg-gradient-to-br from-purple-800 to-fuchsia-700** py-24 md:py-32 px-6 text-white text-center overflow-hidden">
                {/* Background Pattern/Graphic */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <Users className="absolute top-1/4 left-1/4 w-32 h-32 text-fuchsia-300 transform rotate-45" />
                    <Medal className="absolute bottom-1/4 right-1/4 w-24 h-24 text-purple-300 transform -rotate-45" />
                    <HeartHandshake className="absolute top-1/2 left-10 w-48 h-48 text-fuchsia-300 opacity-50 transform scale-150 rotate-12" />
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter leading-tight">
                        <span className="**text-transparent bg-clip-text bg-linear-to-r from-fuchsia-200 to-white**">
                            MEET OUR INCREDIBLE TEAM
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
                        **The dedicated leaders and vibrant volunteers who serve with passion to bring the vision to life.**
                    </p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="mt-8 inline-flex items-center px-8 py-4 bg-gray-200 text-purple-900 rounded-full font-bold text-lg **hover:bg-yellow-300 transition-colors shadow-lg group**"
                    >
                        Join a Team Today <Users className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                </div>
            </section>

            {/* 2. BODY OF CONTENT - Core Leadership Section */}
            <section id="core-team" className="max-w-6xl mx-auto py-20 px-6">
                <div className="text-center mb-10">
                    <Medal className="w-10 h-10 text-fuchsia-600 mx-auto mb-3" />
                    <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">THE STEERING COMMITTEE</p>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">LEADERSHIP CREW</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        These leaders oversee the entire youth communities, setting the strategic direction and ensuring spiritual growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreTeam.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </section>

            {/* 3. BODY OF CONTENT - Departmental Teams Section */}
            <section id="departments" className="bg-fuchsia-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                        <p className="text-purple-700 font-semibold mb-2 text-sm uppercase tracking-widest">MINISTRY DEPARTMENTS</p>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Department Heads</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                            The backbone of our operations, each department is vital for the success of our programs and services.
                        </p>
                    </div>

                    {/* Departmental Units Overview */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {TEAM_UNITS.map((unit, index) => {
                            const IconComponent = unit.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-b-4 border-fuchsia-500 text-center hover:shadow-xl transition-shadow">
                                    <IconComponent className="w-10 h-10 text-fuchsia-700 mx-auto mb-3" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{unit.title}</h3>
                                    <p className="text-gray-600 text-sm">{unit.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Departmental Team Cards */}
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">OTHER KEY TEAM LEADERS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {otherTeam.map((member, index) => (
                            <TeamCard key={`other-${index}`} member={member} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 4. Body - Call to Action (Join the Team) */}
            <section id="join-us" className="bg-purple-700 text-white py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <HeartHandshake className="w-10 h-10 mx-auto mb-4 text-fuchsia-300" />
                    <h2 className="text-3xl font-bold mb-3">Ready to Serve? Find Your Place!</h2>
                    <p className="text-lg opacity-80 mb-5">
                        The GFM Youth Community runs on the dedication of our volunteers. If you have a passion for service, we have a team for you.
                    </p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-8 py-4 **bg-fuchsia-600** text-white rounded-full font-bold text-xl 
                                   hover:bg-fuchsia-500 transition-colors shadow-lg transform hover:scale-102"
                    >
                        Apply to Volunteer <Zap className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </section>

            {/* 5. CREATIVE & PROFESSIONAL FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                    
                    {/* Column 1: Ministry Info */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">GFM YOUTH</h4>
                        <p className="text-sm">
                           To disciple nations into the major of the statue of the Holy Spirit Power.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Our Vision</a></li>
                            <li><a href="#departments" className="hover:text-fuchsia-400 transition-colors">Departments</a></li>
                            <li><a href="#join-us" className="hover:text-fuchsia-400 transition-colors">Volunteer</a></li>
                            <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-2 text-fuchsia-500 shrink-0" />
                                <span>Zarmaganda Diye, Off Rayfield Road, Jos Plateau State</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-fuchsia-500" />
                                <span>(+234)802 642 9018</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-fuchsia-500" />
                                <span>houseofoperaworld@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-500 transition-colors"><Facebook className="w-6 h-6" /></a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-500 transition-colors"><Twitter className="w-6 h-6" /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-fuchsia-500 transition-colors"><Instagram className="w-6 h-6" /></a>
                        </div>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="max-w-7xl mx-auto pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Global Flames Ministry Youth. All rights reserved.</p>
                </div>
            </footer>

            {/* 6. Render Modals Conditionally (Unchanged) */}
            {isModalOpen && (
                <VolunteerModal 
                    onClose={() => setIsModalOpen(false)} 
                    onSuccess={handleSuccess}
                />
            )}
            {isSuccessModalOpen && (
                <SuccessModal onClose={() => setIsSuccessModalOpen(false)} />
            )}
        </div>
    );
};

export default TeamPage;