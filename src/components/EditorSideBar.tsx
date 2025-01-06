import React from "react";
import { Plus, Settings } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import SideBarSectionItems from "./SideBarSectionItems";
import SideBarComponentItems from "./SideBarComponentItems";
import ImportButton from "./ImportButton";

const EditorSideBar = () => {
  return (
    <div className="w-64 border-l border-stone-200 bg-stone-50 flex flex-col h-full">
      <Tabs defaultValue="add" className="flex flex-col h-full">
        <TabsList className="grid w-full grid-cols-2 bg-stone-100">
          <TabsTrigger value="add" className="data-[state=active]:bg-stone-200">
            <Plus className="h-4 w-4 mr-2" /> Add
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-stone-200">
            <Settings className="h-4 w-4 mr-2" /> Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="add" className="flex-grow overflow-hidden flex flex-col">
          <ScrollArea className="flex-grow">
            <div className="p-4 space-y-6">
              <SideBarSectionItems />
              <SideBarComponentItems />
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="settings" className="flex-grow overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4">
              <p className="text-stone-700">Settings content here</p>
            </div>
          </ScrollArea>
        </TabsContent>
        <ImportButton />
      </Tabs>
    </div>
  );
};

export default EditorSideBar;
