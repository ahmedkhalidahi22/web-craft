import Image from "next/image";
import placeholderImage from "@/public/images/placeholder.png";
import { Section } from "@/lib/types";
import { useEditor } from "@/providers/editorProvider";

type Props = {
  section: Section;
};
const Hero = ({ section }: Props) => {
  const { dispatch } = useEditor();

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_SELECTED_SECTION",
      payload: section,
    });
  };
  return (
    <section
      onClick={handleOnClickBody}
      className="border-transparent border-2 hover:border-gray-400 hover:border-dashed cursor-pointer"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover amazing features and solutions to enhance your business growth.
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 px-4">
          <Image
            src={placeholderImage}
            alt="Hero Section"
            className="w-full h-80 rounded shadow object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
