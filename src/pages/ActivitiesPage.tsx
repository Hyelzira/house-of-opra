// src/ActivitiesPage.tsx
import { useState } from 'react'; // <-- 1. Import useState
import type { FC } from 'react';
import {
    Calendar,     
    MapPin,       
    Clock,        
    Sparkles,     
    ArrowRight,   
    Users,        
    X,            // <-- Icon for closing the modal
} from 'lucide-react';

// --- TYPE DEFINITION ---
type UpcomingEvent = typeof UPCOMING_EVENTS[0];

// --- PLACEHOLDER COMPONENTS ---

// Placeholder for a simple Footer, consistent with your other pages
const Footer: FC = () => (
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6 text-sm">
        <div className="max-w-7xl mx-auto">
            <p>© {new Date().getFullYear()} GFM Youth Community. All rights reserved.</p>
        </div>
    </footer>
);

// --- STATIC DATA FOR ACTIVITIES/EVENTS ---

const UPCOMING_EVENTS = [
    {
        id: 1,
        title: "Annual Youth Retreat: Ignite Your Purpose",
        date: "Nov 22-24, 2025",
        time: "Fri 5:00 PM - Sun 2:00 PM",
        location: "Camp Zion, Abuja",
        description: "A weekend of intensive spiritual growth, team building, and prophetic impartation. Don't miss this life-changing experience! The retreat includes detailed sessions on self-discovery, workshops on leadership, powerful worship experiences, and dedicated prayer times. Registration is mandatory and closes on November 1st.", // <-- Longer description for modal
        imageUrl: "https://via.placeholder.com/600x400/9333ea/ffffff?text=YOUTH+RETREAT",
        isNew: true,
        details: { // <-- Additional details for modal
            cost: "₦15,000 (includes feeding & accommodation)",
            contact: "Sis. Michelle (0801 234 5678)",
            registrationLink: "#register-retreat",
        }
    },
    {
        id: 2,
        title: "Leadership Summit: Shaping Future Leaders",
        date: "Oct 29, 2025",
        time: "9:00 AM - 4:00 PM",
        location: "GFM Main Auditorium, Lagos",
        description: "Empowering young leaders with practical skills, mentorship, and vision casting for impactful service in their spheres. Keynote speakers include Pastor Femi Adebayo and a panel of seasoned professionals.",
        imageUrl: "https://via.placeholder.com/600x400/a855f7/ffffff?text=LEADERSHIP+SUMMIT",
        isNew: false,
        details: {
            cost: "Free (Registration Required)",
            contact: "Bro. Benedict (0909 876 5432)",
            registrationLink: "#register-summit",
        }
    },
    {
        id: 3,
        title: "Community Outreach: Feeding the Hungry",
        date: "Dec 7, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Central Market, Port Harcourt",
        description: "Join us as we minister to the less privileged through food distribution and sharing the love of Christ. Volunteers are needed!",
        imageUrl: "https://via.placeholder.com/600x400/c084fc/ffffff?text=OUTREACH+EVENT",
        isNew: false,
        details: {
            cost: "Free (Donations Welcome)",
            contact: "Bro. Jonathan (0812 345 6789)",
            registrationLink: "#volunteer-outreach",
        }
    },
    {
        id: 4,
        title: "Worship Night: 'Atmosphere of Grace'",
        date: "Nov 9, 2025",
        time: "6:00 PM - 8:00 PM",
        location: "GFM Youth Chapel, Enugu",
        description: "An evening dedicated to unhindered praise and worship, inviting the presence of God for revival. Come expectant for a mighty move of God's Spirit.",
        imageUrl: "https://via.placeholder.com/600x400/a78bfa/ffffff?text=WORSHIP+NIGHT",
        isNew: true,
        details: {
            cost: "Free",
            contact: "Sis. Princess (0701 112 2334)",
            registrationLink: "#register-worship",
        }
    },
];

const PAST_EVENTS = [
    {
        id: 101,
        title: "Career Mentorship Workshop",
        date: "Aug 12, 2025",
        imageUrl: "https://via.placeholder.com/400x300/f0abfc/000000?text=CAREER+WORKSHOP",
    },
    {
        id: 102,
        title: "Annual Sports Day",
        date: "July 20, 2025",
        imageUrl: "https://via.placeholder.com/400x300/e9d5ff/000000?text=SPORTS+DAY",
    },
    {
        id: 103,
        title: "Bible Study Marathon",
        date: "June 5, 2025",
        imageUrl: "https://via.placeholder.com/400x300/d8b4fe/000000?text=BIBLE+STUDY",
    },
];

// --- MODAL COMPONENT ---

interface EventModalProps {
    event: UpcomingEvent;
    onClose: () => void;
}

const EventModal: FC<EventModalProps> = ({ event, onClose }) => {
    return (
        // Modal Overlay
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/50 p-4"
            onClick={onClose} // Close when clicking outside
        >
            {/* Modal Content */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Header and Close Button */}
                <div className="sticky top-0 bg-fuchsia-700 text-white p-5 flex justify-between items-center z-10 rounded-t-xl">
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    <button 
                        onClick={onClose} 
                        className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Image */}
                <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />

                {/* Body Content */}
                <div className="p-6 space-y-6">
                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
                    
                    {/* Key Details Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-200 py-4">
                        <div className="flex items-start">
                            <Calendar className="w-5 h-5 mr-3 mt-1 text-fuchsia-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Date</h4>
                                <p className="text-gray-600">{event.date}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Clock className="w-5 h-5 mr-3 mt-1 text-purple-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Time</h4>
                                <p className="text-gray-600">{event.time}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 mt-1 text-indigo-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Location</h4>
                                <p className="text-gray-600">{event.location}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Users className="w-5 h-5 mr-3 mt-1 text-pink-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Cost</h4>
                                <p className="text-gray-600">{event.details.cost}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact and Action */}
                    <div className="pt-2">
                         <p className="text-sm text-gray-500 mb-4">For immediate inquiries, contact: <span className="font-medium text-gray-700">{event.details.contact}</span></p>

                        <a 
                            href={event.details.registrationLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-fuchsia-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-lg text-lg"
                        >
                            Register / Sign Up Now <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- EVENT CARD COMPONENT (UPDATED) ---

interface EventCardProps {
    event: UpcomingEvent;
    onViewDetails: (event: UpcomingEvent) => void; // <-- New prop for click handler
}

const EventCard: FC<EventCardProps> = ({ event, onViewDetails }) => ( // <-- Destructure new prop
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
        {event.isNew && (
            <span className="absolute top-3 left-3 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                <Sparkles className="w-3 h-3 mr-1" /> New
            </span>
        )}
        <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-4 grow">{event.description.substring(0, 100)}...</p> {/* Shortened description for card view */}
            <div className="space-y-2 text-gray-700 text-sm mb-4 border-t border-fuchsia-100 pt-4">
                <p className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-fuchsia-500" /> {event.date}</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-purple-500" /> {event.time}</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-indigo-500" /> {event.location}</p>
            </div>
            {/* Changed <a> tag to <button> and added click handler */}
            <button 
                onClick={() => onViewDetails(event)} 
                className="inline-flex items-center justify-center mt-auto px-6 py-2 bg-fuchsia-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
            >
                View Details <ArrowRight className="w-4 h-4 ml-2" />
            </button>
        </div>
    </div>
);

// --- GALLERY CARD COMPONENT (Unchanged) ---
interface PastEventCardProps {
    event: typeof PAST_EVENTS[0];
}

const PastEventCard: FC<PastEventCardProps> = ({ event }) => (
    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-sm opacity-80">{event.date}</p>
            </div>
        </div>
    </div>
);


// --- MAIN ACTIVITIES PAGE COMPONENT (UPDATED) ---

const ActivitiesPage: FC = () => {
    // 2. STATE FOR MODAL
    const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);

    const handleViewDetails = (event: UpcomingEvent) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* 1. Hero Section */}
            <section className="bg-linear-to-r from-purple-800 to-fuchsia-900 text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span className="block text-fuchsia-300 text-lg uppercase tracking-widest mb-2">Engage & Grow</span>
                        Discover Our Inspiring Activities & Events
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                        From powerful retreats to impactful community service, there's always something happening to help you connect, learn, and lead.
                    </p>
                </div>
            </section>

            {/* 2. Upcoming Events Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Calendar className="w-12 h-12 text-fuchsia-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Upcoming Events</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Mark your calendars! These are the exciting opportunities we have planned for you to participate in.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {UPCOMING_EVENTS.map((event) => (
                            // 3. Pass the handler to the EventCard
                            <EventCard key={event.id} event={event} onViewDetails={handleViewDetails} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Past Events / Gallery Section */}
            <section className="py-20 px-6 bg-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Memories from Past Events</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A glimpse into the joy, learning, and fellowship from our previous gatherings.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PAST_EVENTS.map((event) => (
                            <PastEventCard key={event.id} event={event} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="/gallery" 
                            className="inline-flex items-center px-8 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition-colors shadow-md"
                        >
                            View All Past Events & Gallery <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </section>
            
            {/* 4. Call to Action (Participate / Contact) */}
            <section className="bg-fuchsia-700 text-white py-16 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Next Big Thing!</h2>
                    <p className="text-lg opacity-90 mb-8">
                        Your presence makes a difference. Join us in our upcoming activities and experience growth and fellowship.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-fuchsia-700 rounded-full font-bold text-xl 
                                   hover:bg-fuchsia-100 transition-colors shadow-lg transform hover:scale-105"
                    >
                        Contact Us to Participate
                    </a>
                </div>
            </section>

            {/* Footer Placeholder */}
            <Footer />

            {/* 5. Render Modal Conditionally */}
            {selectedEvent && (
                <EventModal 
                    event={selectedEvent} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default ActivitiesPage;