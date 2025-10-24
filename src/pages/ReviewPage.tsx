// src/ReviewPage.tsx
import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import {
    Quote, 
    Star, 
    Users, 
    MessageSquare, 
    CheckCircle, 
    X, 
    ThumbsUp,
} from 'lucide-react';

// --- PLACEHOLDER COMPONENTS ---

// Placeholder for a simple Footer, consistent with your other pages
const Footer: FC = () => (
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6 text-sm">
        <div className="max-w-7xl mx-auto">
            <p>© {new Date().getFullYear()} GFM Youth Community. All rights reserved.</p>
        </div>
    </footer>
);

// Helper component for displaying star ratings (USED FOR STATIC TESTIMONIALS)
// This is the original, non-interactive component and should NOT be used in the modal form.
const Rating: FC<{ count: number }> = ({ count }) => (
    <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ))}
    </div>
);

// --- NEW INTERACTIVE STAR RATING INPUT COMPONENT ---
interface StarRatingInputProps {
    value: number;
    onChange: (rating: number) => void;
}

const StarRatingInput: FC<StarRatingInputProps> = ({ value, onChange }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex space-x-1 cursor-pointer">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <Star
                        key={index}
                        className={`w-7 h-7 transition-colors`}
                        // Color based on hover state or actual selected value
                        style={{
                            color: ratingValue <= (hover || value) ? '#f59e0b' : '#d1d5db', // yellow-500 or gray-300
                            fill: ratingValue <= (hover || value) ? '#f59e0b' : 'none',
                        }}
                        onClick={() => onChange(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                    />
                );
            })}
        </div>
    );
};


// --- MODAL COMPONENT (UPDATED) ---
interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReviewSubmissionModal: FC<ReviewModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    // NEW STATE: To track the user's selected rating (1 to 5)
    const [rating, setRating] = useState(5); 
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    // Reset all form states when the modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setRating(5); // Default to 5 stars on open
            setName('');
            setReview('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Log final data for simulation
        console.log("Review submitted successfully!", { name, rating, review });
        
        setIsSubmitted(true); // Show success message

        // Close the modal after 2 seconds (2000 milliseconds)
        setTimeout(() => {
            onClose(); 
        }, 2000);
    };

    return (
        // Modal Overlay with 10% Opacity (bg-opacity-10). Changed from `bg-none`
        // as per the last instruction, but using light gray as requested previously.
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-none bg-opacity-10 p-4" onClick={onClose}>
            {/* Modal Content */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in" 
                onClick={e => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 transition-colors"
                    aria-label="Close review form"
                    disabled={isSubmitted} 
                >
                    <X className="w-6 h-6" />
                </button>

                {isSubmitted ? (
                    // Success State
                    <div className="text-center py-10">
                        <ThumbsUp className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-green-700 mb-2">Success!</h3>
                        <p className="text-gray-600">Your valuable testimony has been received. Thank you for sharing!</p>
                        <p className="text-sm text-gray-500 mt-4">(Closing in 2 seconds...)</p>
                    </div>
                ) : (
                    // Initial Form State
                    <>
                        <h3 className="text-2xl font-bold text-fuchsia-700 mb-2">Share Your Experience</h3>
                        <p className="text-gray-600 mb-6">Your testimony inspires us all! Please fill out the details below.</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input 
                                    type="text" 
                                    id="modal-name" 
                                    className="w-full border border-gray-300 p-2 rounded-lg" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
                                {/* REPLACED with the interactive StarRatingInput */}
                                <StarRatingInput value={rating} onChange={setRating} />
                                {/* Optional: Hidden input to submit the value */}
                                <input type="hidden" name="rating" value={rating} />
                            </div>
                            <div>
                                <label htmlFor="modal-review" className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                                <textarea 
                                    id="modal-review" 
                                    rows={4} 
                                    className="w-full border border-gray-300 p-2 rounded-lg resize-none" 
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full py-3 bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-fuchsia-700 transition-colors"
                            >
                                Submit Review
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// 5. MAIN REVIEWS PAGE COMPONENT (Data and Page Structure Unchanged)
// ----------------------------------------------------------------------

const TESTIMONIALS = [
    {
        quote: "Before joining GFM, I felt lost. Their mentorship program gave me clear direction for my career and deepened my faith tremendously. Truly a life-changing community.",
        author: "Ngozi A.",
        role: "Program Alumna, Lagos",
        rating: 5,
    },
    {
        quote: "The weekly study groups are amazing! It's a supportive environment where we can ask tough questions and grow together. Best fellowship I've ever been a part of.",
        author: "Kelechi E.",
        role: "Active Member, Abuja",
        rating: 5,
    },
    {
        quote: "I highly recommend GFM for any youth seeking purpose and community. The leaders genuinely care, and the programs are highly relevant to modern challenges.",
        author: "Ahmed S.",
        role: "Volunteer Lead, Jos",
        rating: 4,
    },
    {
        quote: "From feeling isolated to leading a small group—my journey here has been incredible. GFM helped me find my voice and confidence.",
        author: "Femi O.",
        role: "Small Group Leader",
        rating: 5,
    },
];

const IMPACT_NUMBERS = [
    {
        icon: Users,
        number: "5,000+",
        label: "Youth Empowered Globally",
        color: "text-fuchsia-600",
    },
    {
        icon: CheckCircle,
        number: "50+",
        label: "Programs & Workshops Launched",
        color: "text-purple-600",
    },
    {
        icon: Star,
        number: "4.9/5",
        label: "Average Satisfaction Rating",
        color: "text-yellow-500",
    },
];

const ReviewPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* 1. Hero Section (Focus on Trust) */}
            <section className="bg-linear-to-r from-purple-800 to-fuchsia-900 text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span className="block text-fuchsia-300 text-lg uppercase tracking-widest mb-2">Real Stories, Real Impact</span>
                        Hear Directly From Our Community
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                        The best measure of our success is the transformation we see in the lives of the youth we serve. Read their testimonies and discover why GFM Youth is home.
                    </p>
                </div>
            </section>

            {/* 2. Featured Testimonials (Grid) */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Life-Changing Testimonies</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            These stories reflect the passion, faith, and support found within the Global Flame Youth Community.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
                        {TESTIMONIALS.map((review, index) => (
                            <div 
                                key={index} 
                                className="p-8 bg-fuchsia-50 rounded-xl shadow-lg border-l-8 border-fuchsia-600 flex flex-col justify-between 
                                           hover:shadow-2xl transition-shadow duration-300"
                            >
                                <Quote className="w-8 h-8 text-fuchsia-400 mb-4 opacity-70" />
                                <p className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                                    "{review.quote}"
                                </p>
                                <div className="border-t border-fuchsia-200 pt-4">
                                    <Rating count={review.rating} />
                                    <p className="text-lg font-bold text-gray-900 mt-2">{review.author}</p>
                                    <p className="text-sm text-fuchsia-700 font-medium">{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Key Statistics/Impact Numbers */}
            <section className="py-16 px-6 bg-purple-100">
                <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {IMPACT_NUMBERS.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className="p-6">
                                <IconComponent className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                                <p className="text-5xl font-extrabold text-gray-900 mb-1">{item.number}</p>
                                <p className="text-lg font-semibold text-gray-700 uppercase tracking-wider">{item.label}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. Submission CTA */}
            <section className="bg-fuchsia-700 text-white py-16 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h2>
                    <p className="text-lg opacity-90 mb-8">
                        Has the GFM Youth Community made a positive impact on your life? We'd love to hear your testimony and share it with others.
                    </p>
                    <button 
                        onClick={handleOpenModal}
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-fuchsia-700 rounded-full font-bold text-xl 
                                   hover:bg-fuchsia-100 transition-colors shadow-lg transform hover:scale-105"
                    >
                        Submit Your Review
                    </button>
                </div>
            </section>

            {/* Footer Placeholder */}
            <Footer />

            {/* MODAL IMPLEMENTATION */}
            <ReviewSubmissionModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </div>
    );
};

export default ReviewPage;