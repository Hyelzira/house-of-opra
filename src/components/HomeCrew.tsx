import benedictImg from "../assets/images/Ben.jpg";
import ezekielImg from "../assets/images/isaiah.jpg";
import princessImg from "../assets/images/prinx.jpg";
import michelleImg from "../assets/images/michelle.jpg";
import preciousImg from "../assets/images/officials.jpg";
import miracleImg from "../assets/images/miracle.jpg";
import hyelziraImg from "../assets/images/hyelzira.jpg";
import israelImg from "../assets/images/bruce.jpg";

const HomeCrew = () => {
  const members = [
    { name: "Benedict Daniel", role: "UNIT HEAD GFM YOUTHS", image: benedictImg },
    { name: "Ezekiel Isaiah", role: "ASST. UNIT HEAD GFM YOUTHS", image: ezekielImg },
    { name: "Usigbe Princess", role: "FIN. SECRETARY GFM YOUTHS", image: princessImg },
    { name: "Ajik Michelle", role: "ADMIN UNIT GFM YOUTHS", image: michelleImg },
    { name: "Mahlule Precious", role: "WELFARE COORDINATOR GFM YOUTHS", image: preciousImg },
    { name: "Jonathan Miracle", role: "DANCE DIRECTOR GFM YOUTH", image: miracleImg },
    { name: "Wakawa Hyelzira", role: "WEB DEVELOPER/TECH DIRECTOR", image: hyelziraImg },
    { name: "Ambruce Israel", role: "MEDIA DIRECTOR GFM YOUTHS", image: israelImg },
  ];

  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-2xl font-bold text-fuchsia-600 mb-6">CORE LEADERSHIP TEAM</h2>
      <p className="max-w-1xl mx-auto text-gray-600 mb-8">
        Our dedicated team of facilitators, mentors, and staff members work tirelessly to ensure every young person receives the support and guidance they need to thrive.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((member, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-purple-700 font-bold text-lg">{member.name}</h4>
            <p className="text-gray-500 font-semibold text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCrew;
