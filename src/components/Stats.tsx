const Stats = () => (
  <section className="bg-gray-100 py-10 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
    {[
      { label: 'Social Media Reach', value: '45M+' },
      { label: 'Community Members', value: '500K+' },
      { label: 'Events Hosted', value: '200+' },
      { label: 'Leaders Trained', value: '500+' },
    ].map((stat, i) => (
      <div key={i}>
        <h3 className="text-3xl font-bold text-purple-700">{stat.value}</h3>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    ))}
  </section>
);
export default Stats;
