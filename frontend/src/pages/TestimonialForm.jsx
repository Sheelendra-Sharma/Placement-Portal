import { useState } from "react";

const TestimonialForm = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to a server
    alert("Testimonial Submitted!");
    console.log({ name, position, testimonial });
    setName("");
    setPosition("");
    setTestimonial("");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Submit Your Testimonial</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
          />
        </div>

        {/* Position Field */}
        <div>
          <label htmlFor="position" className="block text-lg font-medium">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={position}
            onChange={(e) => setPosition(e.target.value)} // Update position state
          />
        </div>

        {/* Testimonial Field */}
        <div>
          <label htmlFor="testimonial" className="block text-lg font-medium">
            Testimonial
          </label>
          <textarea
            id="testimonial"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            rows="4"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)} // Update testimonial state
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 p-3 bg-[#0b3f41] text-white rounded-lg hover:bg-[#3d696a] w-full"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
