import { CarouselSize } from "@/components/clients";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightSquareIcon, Minus } from "lucide-react";

export default function Home() {
  return (
    <div className="text-center flex flex-col relative">
      <h1 className="text-5xl md:text-[150px] mt-20 md:mt-36 hero_main_heading">
        Welcome to the{" "}
        <span className="bg-gradient-to-r dark:from-[#ffddb7] dark:to-[#b1c5ff] from-[#fcc688] to-[#81a1fc] text-transparent bg-clip-text">
          Durga Digital
        </span>{" "}
        era
      </h1>
      <h2 className="pt-40 md:pt-80 text-3xl md:text-[50px] leading-tight max-w-5xl mx-auto hero_main_heading">
        Durga Digitals - Your Premier Jaipur Hub for Expert{" "}
        <span className="bg-gradient-to-r dark:from-[#ffddb7] dark:to-[#b1c5ff] from-[#fcc688] to-[#81a1fc] text-transparent bg-clip-text">
          Social Media Marketing and Dynamic Web Development
        </span>{" "}
        Solutions.
      </h2>
      <div className="pt-32 md:pt-72 hero_main_heading max-w-[480px] flex flex-col gap-8 mx-auto">
        <h3 className="text-3xl md:text-[50px] leading-tight max-w-5xl mx-auto">
          The Durga Digital era
        </h3>
        <p className="text-muted-foreground text-lg">
          Gemini represents a significant leap forward in how AI can help
          improve our daily lives.
        </p>
        <Button
          variant={"outline"}
          className="rounded-full text-xl w-fit mx-auto flex gap-2 py-2"
          size={"lg"}
        >
          Contact us <ArrowRight />
        </Button>
      </div>
      <div className="pt-36 hero_main_heading max-w-[480px] flex flex-col gap-8 mx-auto">
        <h3 className="text-3xl md:text-[50px] leading-tight max-w-5xl mx-auto">
          Our Esteemed Clients
        </h3>
        <p className="text-muted-foreground text-lg">
          Discover the Companies Who Trust Us to Deliver Exceptional Results and
          Service Excellence.
        </p>
        <CarouselSize />
      </div>
    </div>
  );
}
