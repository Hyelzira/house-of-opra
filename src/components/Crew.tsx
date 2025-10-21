const Crew = () => (
  <section className="py-16 px-6 text-center">
    <h2 className="text-2xl font-bold text-purple-700 mb-6">Meet Our Crew Members</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {[
        'Jasmine', 'Kayla', 'Tasha', 'Brianna', 'Maya', 'Alexis'
      ].map((name, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <div className="h-32 bg-purple-100 mb-2" /> {/* Placeholder for image */}
          <h4 className="text-purple-700 font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">Crew Role</p>
        </div>
      ))}
    </div>
  </section>
);
export default Crew;
