import Image from "next/image";
import placeholderImage from "@/public/images/placeholder.png";
import { Section } from "@/lib/types";
import { useEditor } from "@/providers/editorProvider";
import { cn } from "@/lib/utils";
import Badge from "../Badge";
import { ToolBar } from "../ToolBar";

type Props = {
  section: Section;
};
const Hero = ({ section }: Props) => {
  const { state, dispatch } = useEditor();
  const { selectedSection } = state;

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
      className={cn("border-transparent border-[2px]  cursor-pointer relative", {
        "border-blue-700": section.id === selectedSection?.id,
        "hover:border-gray-400 hover:border-dashed": section.id !== selectedSection?.id,
      })}
    >
      {section.id === selectedSection?.id && <ToolBar />}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{section.content.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{section.content.subtitle}</p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            {section.content.buttonText}
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
