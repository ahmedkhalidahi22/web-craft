import { Section } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useEditor } from "@/providers/editorProvider";
import { CheckCircle, Shield, Star } from "lucide-react";
import Badge from "../Badge";

type Props = {
  section: Section;
};

export function Features({ section }: Props) {
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
      className={cn("py-5 border-2 border-transparent cursor-pointer relative", {
        "border-blue-700": section.id === selectedSection?.id,
        "hover:border-gray-400 hover:border-dashed": section.id !== selectedSection?.id,
      })}
    >
      {section.id === selectedSection?.id && <Badge>{section.type}</Badge>}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className=" text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            Revolutionary Features
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <div className="w-full  mb-8 flex flex-col text-center items-center gap-5">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-lg group hover:bg-gray-800 transition">
              <Star className="text-gray-800 group-hover:text-white" size={35} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 capitalize">Feature 1</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            </p>
          </div>
          <div className="w-full  mb-8 flex flex-col text-center items-center gap-5">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-200 group rounded-lg hover:bg-gray-800 transition">
              <CheckCircle className="text-gray-800 group-hover:text-white" size={35} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 capitalize">Feature 2</h4>
            <p className="text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            </p>
          </div>
          <div className="w-full  mb-8 flex flex-col text-center items-center  gap-5">
            <div className="flex items-center justify-center w-20 h-20 group bg-gray-200 rounded-lg hover:bg-gray-800 transition">
              <Shield className="text-gray-800 group-hover:text-white" size={35} />
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
