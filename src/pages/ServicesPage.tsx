// src/ServicesPage.tsx
import type { FC } from 'react';
import {
    Heart,  // For community/passion
    Lightbulb, // For enlightenment/teaching
    Users, // For fellowship/community
    Handshake, // For support/partnership
    BookOpen, // For learning/study
    Megaphone, // For outreach/evangelism
    Sparkles, // For youth energy/potential
    Leaf, // For growth/development
    ArrowRight, // For CTAs
} from 'lucide-react';

// NOTE: The Header component has been removed as per your request, assuming
// a global header is used in your main application layout.

// Placeholder for a simple Footer, replace with your global <Footer /> if available
const Footer: FC = () => (
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6 text-sm">
        <div className="max-w-7xl mx-auto">
            <p>© {new Date().getFullYear()} GFM Youth Community. All rights reserved.</p>
        </div>
    </footer>
);


// ----------------------------------------------------------------------
// 1. STATIC DATA FOR SERVICES
// ----------------------------------------------------------------------

const CORE_SERVICES = [
    {
        icon: Users,
        title: "Community & Fellowship",
        description: "Building strong bonds through regular gatherings, events, and mentorship programs.",
    },
    {
        icon: Lightbulb,
        title: "Spiritual Guidance & Teachings",
        description: "Deepening faith through Bible studies, sermons, and spiritual development workshops.",
    },
    {
        icon: BookOpen,
        title: "Educational Workshops",
        description: "Empowering youth with practical skills, career guidance, and academic support.",
    },
    {
        icon: Handshake,
        title: "Mentorship & Coaching",
        description: "Connecting youth with experienced leaders for personal and professional growth.",
    },
    {
        icon: Megaphone,
        title: "Outreach & Evangelism",
        description: "Spreading hope and positive messages within local communities and beyond.",
    },
    {
        icon: Leaf,
        title: "Personal Development",
        description: "Fostering leadership, emotional intelligence, and character building in young individuals.",
    },
];

const HOW_WE_SERVE_STEPS = [
    {
        step: "1. Connect",
        title: "Join Our Community",
        description: "Start by attending our weekly services, virtual meetups, or local events. It's easy to get involved!",
        icon: Users,
    },
    {
        step: "2. Grow",
        title: "Engage in Programs",
        description: "Participate in our tailored workshops, mentorship programs, and Bible studies designed for holistic growth.",
        icon: Lightbulb,
    },
    {
        step: "3. Serve",
        title: "Make an Impact",
        description: "Discover opportunities to use your gifts and talents to serve others within our community and broader society.",
        icon: Heart,
    },
    {
        step: "4. Lead",
        title: "Develop as a Leader",
        description: "Take on leadership roles, contribute to initiatives, and inspire others on their journey.",
        icon: Sparkles,
    },
];

// ----------------------------------------------------------------------
// 2. MAIN SERVICES PAGE COMPONENT
// ----------------------------------------------------------------------

const ServicesPage: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* The global header will render here */}

            {/* 1. Hero Section */}
            <section className="bg-linear-to-r from-fuchsia-700 to-purple-900 text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span className="block text-fuchsia-200 text-lg uppercase tracking-widest mb-2">Our Offerings</span>
                        Empowering Youth Through Diverse Services
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                        At Global Flame Youth Community, we are dedicated to nurturing the spiritual, academic, and social growth of young individuals through impactful programs and unwavering support.
                    </p>
                    <a 
                        href="/contact" 
                        className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-white text-fuchsia-700 rounded-full font-bold text-lg 
                                   hover:bg-fuchsia-100 transition-colors shadow-lg group"
                    >
                        Get Involved Today
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </section>

            {/* 2. Our Core Services (Grid Section) */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Discover Our Core Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide a holistic range of services designed to equip, inspire, and connect young people with their purpose.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {CORE_SERVICES.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="p-8 bg-gray-50 rounded-xl shadow-md border-t-4 border-fuchsia-600 
                                               hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                                >
                                    <IconComponent className="w-12 h-12 text-fuchsia-700 mb-5 group-hover:text-purple-800 transition-colors" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. How We Serve (Process/Steps Section) */}
            <section className="py-20 px-6 bg-fuchsia-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">Our Approach</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Your Journey with GFM Youth</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We believe in a progressive path of engagement, growth, and leadership for every young person.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {HOW_WE_SERVE_STEPS.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                                    <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mb-4 border-4 border-fuchsia-300">
                                        <IconComponent className="w-8 h-8 text-fuchsia-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.step}: {item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Call to Action */}
            <section className="bg-purple-800 text-white py-16 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Transformation?</h2>
                    <p className="text-lg opacity-90 mb-8">
                        Join Global Flame Youth Community and embark on a journey of purpose, growth, and profound connection. Your future begins now.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-10 py-4 bg-fuchsia-500 text-white rounded-full font-bold text-xl 
                                   hover:bg-fuchsia-600 transition-colors shadow-lg transform hover:scale-105"
                    >
                        Contact Us to Get Started
                        <ArrowRight className="w-6 h-6 ml-3" />
                    </a>
                </div>
            </section>

            {/* Footer Placeholder */}
            <Footer />
        </div>
    );
};

export default ServicesPage;