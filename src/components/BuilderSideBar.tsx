import {
  Plus,
  Settings,
  Layout,
  Home,
  LayoutGrid,
  MessageSquare,
  FootprintsIcon as FooterIcon,
  BoxIcon as ButtonIcon,
  Link,
  Type,
  Image,
  Heading1,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections = [
  { name: "Header", icon: <Layout className="h-4 w-4 mr-2" /> },
  { name: "Hero", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "Features", icon: <LayoutGrid className="h-4 w-4 mr-2" /> },
  { name: "Testimonials", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
  { name: "Footer", icon: <FooterIcon className="h-4 w-4 mr-2" /> },
];

const components = [
  { name: "Button", icon: <ButtonIcon className="h-4 w-4 mr-2" /> },
  { name: "Link", icon: <Link className="h-4 w-4 mr-2" /> },
  { name: "Paragraph", icon: <Type className="h-4 w-4 mr-2" /> },
  { name: "Image", icon: <Image className="h-4 w-4 mr-2" /> },
  { name: "Heading", icon: <Heading1 className="h-4 w-4 mr-2" /> },
];

export function BuilderSideBar() {
  return (
    <div className="w-64 border-l border-stone-200 bg-stone-50">
      <Tabs defaultValue="add" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-stone-100 ">
          <TabsTrigger value="add" className="data-[state=active]:bg-stone-200">
            <Plus className="h-4 w-4 mr-2" /> Add
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:bg-stone-200"
          >
            <Settings className="h-4 w-4 mr-2" /> Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="add" className="p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sections" className="border-stone-200">
              <AccordionTrigger className="hover:bg-stone-100">
                Sections
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.name}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      >
                        {section.icon}
                        {section.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="components" className="border-stone-200">
              <AccordionTrigger className="hover:bg-stone-100">
                Components
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {components.map((component) => (
                    <li key={component.name}>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="settings" className="p-4">
          <p className="text-stone-700">Settings content here</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
