import { BoxIcon as ButtonIcon, Link, Type, Image, Heading1 } from "lucide-react";
import { Button } from "./ui/button";

const components = [
  { name: "Button", icon: <ButtonIcon className="h-4 w-4 mr-2" /> },
  { name: "Link", icon: <Link className="h-4 w-4 mr-2" /> },
  { name: "Paragraph", icon: <Type className="h-4 w-4 mr-2" /> },
  { name: "Image", icon: <Image className="h-4 w-4 mr-2" /> },
  { name: "Heading", icon: <Heading1 className="h-4 w-4 mr-2" /> },
];

const SideBarComponentItems = () => {
  return (
    <div className=" relative py-3 px-2 border border-stone-300 rounded-lg ">
      <div className="absolute top-0 left-0 h-full w-full bg-stone-200 opacity-50"></div>
      <p className="absolute -top-[18px] right-[4px] text-xs font-medium text-stone-500">
        Coming soon
      </p>
      <h3 className="mb-2 text-sm font-semibold text-stone-900">Components</h3>
      <ul className="space-y-2">
        {components.map((component) => (
          <li key={component.name} draggable>
            <Button
              variant="ghost"
              className="w-full justify-start text-stone-700 hover:bg-stone-100 hover:text-stone-900"
            >
              {component.icon}
              {component.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarComponentItems;
