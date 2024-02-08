import React from "react";
import { Button } from "../ui/button";
import { LogIn, MoonIcon, SunIcon } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between">
      <div className="text-xl font-semibold flex gap-1 items-center">
        <SunIcon /> Durga Digitals
      </div>
      <ul className="flex gap-8">
        <Link href={"/"} className="">
          Home
        </Link>
        <Link href={"/services"} className="">
          Services
        </Link>
        <Link href={"/pricing"} className="">
          Pricing
        </Link>
        <Link href={"/about"} className="">
          About
        </Link>
      </ul>
      <div className="flex gap-4">
        <Button className="flex gap-2" variant={"outline"}>
          Login <LogIn className="h-4 w-4" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
