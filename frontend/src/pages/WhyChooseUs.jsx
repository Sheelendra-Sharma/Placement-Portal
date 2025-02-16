import {
  FaSuitcase,
  FaGraduationCap,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="p-8">
      <div className="card card-rounded bg-white text-black p-8 flex flex-col items-center text-center gap-4 rounded-lg">
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold">
            Why Choose Our Placement Portal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center p-4">
              <span className="text-5xl text-gray-600">
                <FaSuitcase />
              </span>
              <h3 className="mt-2 font-semibold">Exclusive Opportunities</h3>
              <p className="text-gray-500">
                Access job listings not found anywhere else
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-5xl text-gray-600">
                <FaGraduationCap />
              </span>
              <h3 className="mt-2 font-semibold">Career Guidance</h3>
              <p className="text-gray-500">
                Get expert advice to navigate your career path
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-5xl text-gray-600">
                <FaBuilding />
              </span>
              <h3 className="mt-2 font-semibold">Top Employers</h3>
              <p className="text-gray-500">
                Connect with leading companies in various industries
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-5xl text-gray-600">
                <FaUsers />
              </span>
              <h3 className="mt-2 font-semibold">Networking</h3>
              <p className="text-gray-500">
                Build valuable connections with peers and professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider my-4 border-t border-gray-500"></div>
    </div>
  );
};

export default WhyChooseUs;
