const testimonials = [
    {
      name: "John Doe",
      title: "Software Engineer",
      quote: "This platform has truly transformed my job search experience. The interface is intuitive, and I was able to secure my dream job within a month!",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      quote: "I’ve never experienced such seamless career advancement. The tools and resources offered here are outstanding.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
      name: "Emily Brown",
      title: "Marketing Director",
      quote: "The placement platform has exceeded my expectations. I felt fully supported throughout my job search, and the results speak for themselves.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    }
  ];
  
  const Testimonial = () => {
    return (
      <>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-rounded border border-gray-300 bg-white text-black p-8 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="avatar w-24 h-24 rounded-full overflow-hidden">
                    <img src={testimonial.avatar} alt={`${testimonial.name}'s Avatar`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
          <div className="divider mt-28 border-t border-gray-500"></div>

        </div>
      </>
    );
  };
  
  export default Testimonial;
  