import { CheckCircle, Shield, Star } from "lucide-react";

export function Features() {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className=" text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            Revolutionary Features
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis
          </p>
        </div>
        <div className="flex gap-10">
          <div className="w-full  md:w-1/3 px-4 mb-8 flex flex-col text-center items-center gap-5">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full group hover:bg-gray-800 transition">
              <Star className="text-gray-800 group-hover:text-white" size={30} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 capitalize">Feature 1</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 flex flex-col text-center items-center gap-5">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-800 transition">
              <CheckCircle className="text-gray-800 hover:text-white" size={30} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 capitalize">Feature 2</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 flex flex-col text-center items-center  gap-5">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-800 transition">
              <Shield className="text-gray-800 hover:text-white" size={30} />
            </div>
            <h4 className="text-lg font-medium text-gray-900  capitalize">Feature 3</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
