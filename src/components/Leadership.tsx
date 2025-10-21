const Leadership = () => (
  <section className="py-16 px-6 text-center">
    <h2 className="text-2xl font-bold text-purple-700 mb-6">COMMUNITY LEADERSHIP</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { name: 'Opra St. John', role: 'Founder & CEO' },
        { name: 'Jada St. John', role: 'Co-Founder & COO' },
      ].map((leader, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">
          <div className="h-40 bg-purple-200 mb-4" /> {/* Placeholder for image */}
          <h3 className="text-xl font-bold text-purple-700">{leader.name}</h3>
          <p className="text-gray-600">{leader.role}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Leadership;
