const Membership = () => (
  <section id="membership" className="py-16 px-6 text-center bg-gray-50">
    <h2 className="text-2xl font-bold text-purple-700 mb-6">Membership Options</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {['Basic', 'Premium', 'VIP'].map((type, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold text-purple-700">{type} Membership</h3>
          <p className="text-gray-600 my-4">Access to exclusive resources and events.</p>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-full">Join Now</button>
        </div>
      ))}
    </div>
  </section>
);
export default Membership;
