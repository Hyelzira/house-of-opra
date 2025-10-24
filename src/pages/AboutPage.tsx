import React from 'react';
import type { FC, SyntheticEvent } from 'react'; // FIX: Use type-only import for FC and SyntheticEvent
import { Link } from 'react-router-dom';
import { 
    Target, Eye, Award, Users, Lightbulb, Heart, Zap, CheckCircle, 
} from 'lucide-react';

// ----------------------------------------------------------------------
// 1. TYPE DEFINITIONS
// ----------------------------------------------------------------------

interface Leader {
    name: string;
    role: string;
    image: string;
}

interface FeatureItemProps {
    icon: React.ElementType; // FIX: Use React.ElementType to define component prop type
    title: string;
    description: string;
}

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className: string;
    fallback?: string;
}

// ----------------------------------------------------------------------
// 2. STATIC DATA (UPDATED IMAGE PATHS)
// ----------------------------------------------------------------------

// Replaced local paths with placeholder URLs to prevent compilation errors/glitches
const LEADERSHIP_TEAM: Leader[] = [
    { name: 'BENEDICT DANIEL', role: 'UNIT HEAD GFM YOUTHS', image: 'https://placehold.co/400x300/F472B6/FFFFFF?text=BENEDICT' },
    { name: 'EZEKIEL ISAIAH', role: 'ASST. UNIT HEAD GFM YOUTHS', image: 'https://placehold.co/400x300/C084FC/FFFFFF?text=EZEKIEL' },
    { name: 'USIGBE PRINCESS', role: 'FIN. SECRETARY GFM YOUTHS', image: 'https://placehold.co/400x300/F472B6/FFFFFF?text=PRINCESS' },
    { name: 'AJIK MICHELLE', role: 'ADMIN UNIT GFM YOUTHS', image: 'https://placehold.co/400x300/C084FC/FFFFFF?text=MICHELLE' },
    { name: 'MAHLULE PRECIOUS', role: 'WELFARE COORDINATOR GFM YOUTHS', image: 'https://placehold.co/400x300/F472B6/FFFFFF?text=MAHLULE' },
    { name: 'JONATHAN MIRACLE', role: 'DANCE DIRECTOR GFM YOUTHS', image: 'https://placehold.co/400x300/C084FC/FFFFFF?text=JONATHAN' },
    { name: 'WAKAWA HYELZIRA', role: 'WEB DEVELOPER/TECH DIRECTOR', image: 'https://placehold.co/400x300/F472B6/FFFFFF?text=WAKAWA' },
    { name: 'AMBRUCE ISRAEL', role: 'MEDIA DIRECTOR GFM YOUTHS', image: 'https://placehold.co/400x300/C084FC/FFFFFF?text=AMBRUCE' },
];

const MISSION_GOALS = [
    {
        icon: Lightbulb,
        title: "Inspire Growth",
        description: "Igniting potential and fostering spiritual and personal development."
    },
    {
        icon: Heart,
        title: "Build Community",
        description: "Creating a supportive and inclusive family where everyone belongs."
    },
    {
        icon: Zap,
        title: "Empower Action",
        description: "Equipping youth with skills to make a tangible impact in the world."
    },
    {
        icon: CheckCircle,
        title: "Live Purposefully",
        description: "Guiding young individuals to discover and fulfill their divine calling."
    }
];

// ----------------------------------------------------------------------
// 3. UTILITY COMPONENTS
// ----------------------------------------------------------------------

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

const FeatureItem: FC<FeatureItemProps> = ({ icon: IconComponent, title, description }) => (
    <div className="flex items-start space-x-4">
        <IconComponent className="w-8 h-8 text-fuchsia-600 shrink-0 mt-1" />
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


// ----------------------------------------------------------------------
// 4. MAIN ABOUT PAGE COMPONENT
// ----------------------------------------------------------------------

const AboutPage: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* Hero Section - Adapted from your homepage's hero */}
            <section className="relative bg-linear-to-br from-purple-800 to-fuchsia-700 py-24 md:py-32 px-6 text-white text-center overflow-hidden">
                {/* Background Pattern/Graphic */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <Zap className="absolute top-1/4 left-1/4 w-32 h-32 text-fuchsia-300 transform rotate-45" />
                    <Award className="absolute bottom-1/4 right-1/4 w-24 h-24 text-purple-300 transform -rotate-45" />
                    <Lightbulb className="absolute top-1/2 left-10 w-48 h-48 text-fuchsia-300 opacity-50 transform scale-150 rotate-12" />
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter leading-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-200 to-white">
                            ABOUT GFM YOUTH
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
                        Discover Our Journey, Our Purpose, and the Leaders Who Drive Us.
                    </p>
                    <Link 
                        to="/contact" 
                        className="mt-8 inline-flex items-center px-8 py-4 bg-yellow-400 text-purple-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg group"
                    >
                        Join Our Movement 
                        <Users className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                    </Link>
                </div>
            </section>

            {/* Our Mission Section */}
            <section id="mission" className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">OUR CORE PURPOSE</p>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission: Igniting Potential, Shaping Futures</h2>
                        <p className="text-gray-700 leading-relaxed mb-6 border-l-4 border-fuchsia-400 pl-4 italic">
                            "To raise a people of power who will manifest the fullness of the Realities of Christ through the Spirit, under the leadership of our Father in the Lord, Apostle Danjuma Musa Gaksu."
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We are dedicated to providing a transformative environment where young individuals can **discover their identity in Christ**, **develop their unique talents**, and **contribute meaningfully** to their communities and the world at large.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                            {MISSION_GOALS.map((item, index) => (
                                <FeatureItem 
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        {/* REPLACED local asset path with a placeholder URL */}
                        <ImageWithFallback
                            src="https://placehold.co/600x400/9333EA/ffffff?text=Mission+In+Action" 
                            alt="Youth engaging in mission"
                            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-fuchsia-400"
                            fallback="https://via.placeholder.com/600x400/7C3AED/FFFFFF?text=Our+Mission"
                        />
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section id="vision" className="bg-fuchsia-50 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">LOOKING FORWARD</p>
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Vision: A Generation Transformed</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
                        We envision a world where every young person is a beacon of hope, equipped with unwavering faith,
                        exceptional leadership skills, and an insatiable desire to bring positive change and spiritual revival.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
                            <Target className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Global Reach</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To extend our transformative programs and mentorship to youth across all continents.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-fuchsia-600 hover:shadow-2xl transition-shadow duration-300">
                            <Eye className="w-12 h-12 text-fuchsia-700 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Innovation Hub</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be at the forefront of youth development, leveraging technology and creative arts.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
                            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Lasting Impact</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To cultivate a legacy of servant leaders who will inspire generations to come.
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/services"
                        className="mt-12 inline-flex items-center px-8 py-4 bg-fuchsia-700 text-white rounded-full font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg"
                    >
                        Explore Our Programs <Target className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </section>

            {/* Our Leadership Section - Styled to match Image 2 */}
            <section id="leadership" className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">MEET THE TEAM</p>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">CORE LEADERSHIP TEAM</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        Our dedicated team of facilitators, mentors, and staff members work tirelessly to ensure every young person receives the support and guidance they need to thrive.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LEADERSHIP_TEAM.map((leader, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                            {/* Image Container - Mimicking the style of Image 2 */}
                            <div className="relative overflow-hidden w-full h-60 bg-gray-200 flex items-center justify-center">
                                {/* The gold overlay from Image 2 */}
                                <div className="absolute inset-0 bg-yellow-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                <ImageWithFallback
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                                    fallback={`https://via.placeholder.com/400x300/F0F0F0/888888?text=${leader.name.split(' ')[0]}`}
                                />
                            </div>
                            
                            {/* Text Content - Mimicking the style of Image 2 */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{leader.name}</h3>
                                <p className="text-fuchsia-600 text-sm font-medium uppercase">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action - Join the Team (Optional, but good for About pages) */}
            <section className="bg-purple-900 text-white py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Be Part of Something Bigger</h2>
                    <p className="text-lg opacity-90 mb-8">
                        Our growth is powered by passionate individuals. Explore opportunities to contribute your talents!
                    </p>
                    <Link 
                        to="/volunteer" 
                        className="inline-flex items-center px-8 py-4 bg-fuchsia-600 text-white rounded-full font-bold text-lg hover:bg-fuchsia-500 transition-colors shadow-lg"
                    >
                        Volunteer With Us <Users className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </section>

            {/* Basic Footer (You can replace this with your full footer component if desired) */}
            <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6 text-sm">
                <div className="max-w-7xl mx-auto">
                    <p>&copy; {new Date().getFullYear()} GFM Youth Community. All rights reserved.</p>
                    <p className="mt-2">
                        <Link to="/privacy" className="hover:text-fuchsia-400">Privacy Policy</Link> | 
                        <Link to="/terms" className="ml-2 hover:text-fuchsia-400">Terms of Service</Link>
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default AboutPage;
