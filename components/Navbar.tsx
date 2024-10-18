"use client";
import Image from "next/image";
import hackathonPic from "@/public/hackathon logo.png";
import VikshaIcon from "@/public/viksha_logo.png";
import NeuralNexusIcon from "@/public/neural_nexus_logo.png";
import NeuralNexusLightIcon from "@/public/neural_nexus_inverted.png";
import IEEELogo from "@/public/ieee_logo.png";
import { Button } from "./ui/button";
import * as React from "react";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-4 flex items-center pl-2 space-x-2 lg:mr-6" href="/">
            <Image
              src={hackathonPic}
              alt="hackathon_logo"
              height={50}
              width={100}
            />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <a href="#" className="px-3">
            <Image src={VikshaIcon} alt="viksha_icon" height={30} width={60} />
          </a>
          <a href="#" className="px-3">
            <Image
              src={IEEELogo}
              alt="neural_nexus_icon"
              height={40}
              width={70}
            />
          </a>
          <a href="#" className="px-3">
            <Image
              src={
                theme == "dark"
                  ? NeuralNexusIcon
                  : theme == "system"
                  ? NeuralNexusIcon
                  : NeuralNexusLightIcon
              }
              alt="neural_nexus_icon"
              height={30}
              width={60}
            />
          </a>

          <nav className="flex items-center pr-3 space-x-2">
            <ModeToggle />
            <Button>Login</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
