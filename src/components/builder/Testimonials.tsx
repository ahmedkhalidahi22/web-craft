import React from "react";
import { User } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto  max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-gray-600">Testimonials from our happy clients</p>
        </div>
        <div className="flex gap-8 ">
          <div className="w-full  flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-800 transition">
              <User className="text-gray-800 hover:text-white" size={32} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize mt-4">Client 1</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            </p>
          </div>
          <div className="w-full   flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-800 transition">
              <User className="text-gray-800 hover:text-white" size={32} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize mt-4">Client 2</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            </p>
          </div>
          <div className="w-full   flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-800 transition">
              <User className="text-gray-800 hover:text-white" size={32} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize mt-4">Client 3</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
