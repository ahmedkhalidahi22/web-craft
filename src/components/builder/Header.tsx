"use client";

import React from "react";
import { Command } from "lucide-react";
import { Section } from "@/lib/types";

type Props = {
  section: Section;
};
export function Header({ section }: Props) {
  return (
    <nav className="bg-gray-900 text-white w-full rounded-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-2">
          <Command className="h-6 w-6" />
          <span className=" font-bold">MyWebsite</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-sm">
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
