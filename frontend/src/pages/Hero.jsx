import HeroSectionCard from "./HeroSectionCard";
import Testimonial from "./Testimonial";
import TestimonialForm from "./TestimonialForm";
import WhyChooseUs from "./WhyChooseUs";

const Hero = () => {
  return (
    <>

      {/* Hero Section with Background Image */}
      <div className="bg-[url('https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-full h-screen flex items-center justify-start px-8">
        <div className="w-2/3 md:w-1/2 p-8 text-black space-y-4 ml-10 z-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Empowering the next{" "}
            <span className="text-[#103839]">generation of professionals</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Seamlessly connecting students with top recruiters, fostering
            meaningful engagements, and creating limitless career opportunities
            for a brighter future.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="btn bg-[#0b3f41] hover:bg-[#345d5f] text-white rounded-lg border-none p-2 w-48 text-xl">
              Register Now
            </button>
            <button className="btn bg-[#eeeeee] text-black rounded-lg border-none p-2 w-48 text-xl">
              Browse Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="p-8 flex items-center justify-between gap-16 h-screen">
        {/* Left Section - Text */}
        <div className="w-1/2 space-y-7">
          <h1 className="text-5xl font-bold text-gray-800">
            Get the right start—based on your potential, not your family name.
          </h1>
          <button className="btn bg-[#0b3f41]  hover:bg-[#345d5f] text-white rounded-lg border-none w-48 p-5 text-xl">
            Register Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 flex justify-end">
          <img
            src="https://www.joinsuperset.com/img/superset-ip-student-hero.svg"
            alt="Student Hero"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="wrapper container text-center mx-auto p-8 space-y-8">
        <div className="card card-rounded bg-[#0b3f41] text-white p-8 flex flex-col items-center text-center gap-4 rounded-lg">
          <h2 className="text-5xl font-semibold">
            Access to more Opportunities
          </h2>
          <p className="text-lg">
            Get access to jobs and internships, verified by your college.
          </p>
          <button className="btn bg-[#0b3f41] hover:bg-[#345d5f] text-white rounded-lg border-none w-48 p-4 text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Least Bottom Section */}
      <div className="p-8 flex items-center justify-between gap-16 h-screen">
        <div className="w-1/2 space-y-7">
          <h1 className="text-5xl font-bold text-gray-800">
            Match your potential with the right opportunity—where talent meets
            the future.
          </h1>
          <button className="btn bg-[#0b3f41] hover:bg-[#345d5f] text-white rounded-lg border-none w-48 p-5 text-xl">
            Sign Up Now
          </button>
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            src="https://www.joinsuperset.com/img/students-match-skills-feature-image.svg"
            alt="Student Hero"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Additional Section */}
      <HeroSectionCard />
      <WhyChooseUs />
      <Testimonial />
      <TestimonialForm/>
    </>
  );
};

export default Hero;
