const About = () => (
  <section id="about" className="py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-purple-700 mb-4">WHO/WHAT IS HOUSE OF OPRA?</h2>
    <p className="max-w-3xl mx-auto text-gray-700 mb-8">
      We are a community focused on empowerment, leadership, and personal development.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {['Community', 'Leadership', 'Empowerment', 'Personal Development', 'Events', 'Resources'].map((item, i) => (
        <div key={i} className="bg-purple-100 p-4 rounded shadow">
          <h3 className="text-purple-700 font-semibold">{item}</h3>
        </div>
      ))}
    </div>
  </section>
);
export default About;
