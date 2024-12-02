const Features = () => (
  <section className="py-8 px-4">
    <h2 className="text-2xl font-bold text-center">Features</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {[
        "Technology Courses",
        "Management Courses",
        "Design Courses",
        "Healthcare",
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-blue-50 p-4 rounded shadow-md text-center"
        >
          <h3 className="font-semibold">{feature}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
