const Blog = () => (
  <section id="blog" className="py-16 px-6 text-center">
    <h2 className="text-2xl font-bold text-purple-700 mb-6">Latest Blog Posts</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        'Empowerment Through Community',
        'Leadership Skills for the Future',
        'Personal Growth Strategies'
      ].map((title, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <div className="h-32 bg-purple-100 mb-2" /> {/* Placeholder for image */}
          <h4 className="text-purple-700 font-semibold">{title}</h4>
          <p className="text-gray-500 text-sm">Short description of the post.</p>
        </div>
      ))}
    </div>
  </section>
);
export default Blog;
