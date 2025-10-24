import React, { useState } from 'react';
// Assuming lucide-react is available for icons like X (Close)
import { X } from 'lucide-react'; 

// --- SIMULATED ASSET IMPORT ---
// In a single-file environment, we must use a placeholder URL for the imported image.
// Original: import Dad from "../assets/images/dad.jpg";
const Dad = "../assets/image/edu.png";

// ----------------------------------------------------
// ProgramModal Component: Handles the display of detailed content.
// ----------------------------------------------------
interface ProgramItem {
  title: string;
  icon: string;
}
interface ProgramModalProps {
  item: ProgramItem | null;
  onClose: () => void;
}
const ProgramModal: React.FC<ProgramModalProps> = ({ item, onClose }) => {
  // If no item is selected, return null (modal is hidden)
  if (!item) return null;

  // Detailed explanations for each program pillar
  const modalDescription = {
      "EVERYTHING EDUCATION": {
        title: "Academic Excellence and Future Readiness",
        desc: "Our **Education** pillar offers comprehensive academic support designed to close achievement gaps and prepare youth for post-secondary success. This includes one-on-one and group tutoring across core subjects, specialized workshops for standardized test preparation (SAT/ACT), college application guidance, and essay coaching. We focus on developing critical thinking, study skills, and fostering a lifelong love for learning, ensuring every participant has the resources to excel academically.",
        focus: ["Tutoring & Homework Help", "College Admissions Counseling", "Test Prep (SAT/ACT)", "Scholarship Workshops"],
      },
      "EVERYTHING POETRY": {
        title: "Spoken Word, Creative Writing, and Performance",
        desc: "The **Poetry** program is a powerful platform for self-expression and vocal empowerment. We host weekly spoken word workshops that focus on rhythm, rhyme, storytelling, and metaphor. Youth are encouraged to write and perform original pieces, culminating in public poetry slams and showcases. This program builds confidence, strengthens literary skills, and helps participants explore complex emotions and social issues through the art of poetry.",
        focus: ["Spoken Word Workshops", "Poetry Slams & Showcases", "Creative Writing Development", "Emotional Intelligence"],
      },
      "EVERYTHING SPORTS": {
        title: "Character Building Through Athletics and Fitness",
        desc: "More than just games, our **Sports** pillar uses athletic activities—including basketball, soccer, and fitness training—as a vehicle for holistic development. Participants learn crucial life skills such as teamwork, discipline, leadership, and resilience. We emphasize health and wellness, providing fitness instruction and nutrition education, all within a supportive structure that promotes good sportsmanship and physical well-being.",
        focus: ["Organized Leagues", "Fitness & Wellness Training", "Teamwork & Leadership Skills", "Mentorship from Coaches"],
      },
      "EVERYTHING MOVIES": {
        title: "The Art and Craft of Youth Filmmaking",
        desc: "The **Movies** program is a hands-on exploration of cinematic arts. Participants are involved in every step of the filmmaking process, from initial concept and scriptwriting to directing, cinematography, editing, and post-production. They learn industry-standard technical skills while collaborating to produce short films and documentaries, giving them practical experience and a creative outlet for visual storytelling.",
        focus: ["Scriptwriting & Storyboarding", "Camera & Lighting Operation", "Video Editing Software", "Youth-Led Film Productions"],
      },
      "EVERYTHING FASHION": {
        title: "Design, Style, and Entrepreneurship",
        desc: "The **Fashion** program introduces youth to the diverse world of design, style, and merchandising. Activities include design sketching, upcycling workshops, sustainable fashion awareness, and basic garment construction. We also cover the business side of fashion, offering guidance on portfolio development and branding, culminating in annual youth fashion shows where participants model and display their creations.",
        focus: ["Design Sketching & Theory", "Sustainable Fashion Projects", "Portfolio Development", "Annual Fashion Show Production"],
      },
      "EVERYTHING POLITICS": {
        title: "Civic Literacy and Community Advocacy",
        desc: "Our **Politics** program is dedicated to fostering informed and active citizens. Youth comprehend key political concepts, explore local and national governance, and develop persuasive communication skills through debate clubs and mock government sessions. The program connects participants with local leaders and encourages them to initiate and advocate for community change, turning theoretical knowledge into real-world impact.",
        focus: ["Debate & Public Speaking", "Mock Government & Policy Analysis", "Voter Education & Civic Literacy", "Community Advocacy Projects"],
      },
  };

  const programDetails = modalDescription[item.title as keyof typeof modalDescription];

  return (
    // Backdrop for the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-600/50 backdrop-blur-sm transition-opacity"
      onClick={onClose} // Close when clicking the backdrop
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-xl w-full transform transition-all duration-300 scale-100 opacity-100 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 transition rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-200 mb-6 overflow-hidden border-4 border-purple-400">
            <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
          </div>

          {/* Program Title */}
          <h3 id="modal-title" className="text-3xl font-extrabold text-purple-700 mb-2 uppercase tracking-tight">
            {item.title}
          </h3>
          
          {/* Program Subtitle/Focus */}
          <p className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 w-full">
            {programDetails.title}
          </p>
          
          {/* Detailed Explanation */}
          <p className="text-gray-700 text-base mb-6 text-left leading-relaxed">
            {programDetails.desc}
          </p>
          
          {/* Key Focus Areas */}
          <div className="mt-2 w-full pt-3">
             <h4 className="text-lg font-bold text-gray-900 mb-3 text-left">Areas of Focus:</h4>
             <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600 text-left list-none pl-0">
                {programDetails.focus.map((f: string, index: number) => (
                    <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 8 010-16 8 8 010 16zm-3.707-9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {f}
                    </li>
                ))}
             </ul>
          </div>
        </div>
        
        {/* Call to action button */}
        <button
          onClick={onClose}
          className="mt-8 w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition duration-150 shadow-lg shadow-purple-300/50"
        >
          Close 
          
        </button>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// HomeAbout Component (Original structure preserved)
// ----------------------------------------------------
const HomeAbout = () => {
  // 1. State to track which item is open in the modal
  const [selectedItem, setSelectedItem] = useState<ProgramItem | null>(null);

  const items = [
    {
      title: "EVERYTHING EDUCATION",
      desc: "We provide educational support and resources to help youth excel academically.",
      icon: Dad,
    },
    {
      title: "EVERYTHING POETRY",
      desc: "Express yourself through spoken word and explore the power of poetry.",
      icon: Dad,
    },
    {
      title: "EVERYTHING SPORTS",
      desc: "Build character and teamwork through various sports activities.",
      icon: Dad,
    },
    {
      title: "EVERYTHING MOVIES",
      desc: "Perform in youth-led movie productions and explore the art of filmmaking.",
      icon: Dad,
    },
    {
      title: "EVERYTHING FASHION",
      desc: "Explore fashion design and develop an appreciation for style and creativity.",
      icon: Dad,
    },
    {
      title: "EVERYTHING POLITICS",
      desc: "Comprehend key political concepts and learn how to make a difference.",
      icon: Dad,
    },
  ];

  // 2. Handler to open the modal with the item data
  const openModal = (item: ProgramItem) => {
    setSelectedItem(item);
  };

  // 3. Handler to close the modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="about" className="py-16 px-6 text-center bg-gray-50 font-sans">
      <h2 className="text-4xl font-extrabold text-purple-800 mb-4 tracking-tight">
        WHO/WHAT IS HOUSE OF OPRA?
      </h2>
      <p className="max-w-4xl mx-auto text-gray-600 text-lg mb-12">
        House of Opera is a youth-focused organization dedicated to developing
        the potential of young people through comprehensive programs in arts,
        education, sports, and community engagement. We empower young persons
        who can inspire talents waiting to be discovered and nurtured. Our
        mission is to create a safe, inclusive space where they can explore
        their passions, build confidence, and develop skills for lifelong
        success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          // Modified the card div to be clickable
          <div
            key={i}
            onClick={() => openModal(item)}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300 cursor-pointer border border-purple-100"
            tabIndex={0} // Make card focusable for keyboard users
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)} // Allow Enter/Space key activation
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-200 mb-4 overflow-hidden shadow-inner">
              <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="text-gray-500 text-base">{item.desc}</p>
            <div className="mt-4 text-purple-600 font-semibold text-sm hover:text-purple-700 transition">
                Click for Detailed Explanation →
            </div>
          </div>
        ))}
      </div>

      {/* 4. Render the Modal component, passing the selected item and the close handler */}
      <ProgramModal item={selectedItem} onClose={closeModal} />
    </section>
  );
};

export default HomeAbout;
