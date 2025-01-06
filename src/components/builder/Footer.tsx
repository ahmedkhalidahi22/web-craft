import React from "react";
import { Command } from "lucide-react";
import { Section } from "@/lib/types";
import { useEditor } from "@/providers/editorProvider";

type Props = {
  section: Section;
};

export function Footer({ section }: Props) {
  const { dispatch } = useEditor();

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_SELECTED_SECTION",
      payload: section,
    });
  };

  return (
    <footer
      onClick={handleOnClickBody}
      className="bg-gray-900 text-white rounded-lg shadow border-2 border-transparent hover:border-gray-400 hover:border-dashed cursor-pointer "
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <div className="flex items-center space-x-2">
              <Command className="h-6 w-6" />
              <span className=" font-bold">MyWebsite</span>
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            MyWebsite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
