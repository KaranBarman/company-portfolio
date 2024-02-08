import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const clients = [
  { companyName: "Zalsa Restaurant", image: "/images/zalsa-restaurant.png" },
  { companyName: "Chinkara Chai", image: "/images/chinkara.png" },
  { companyName: "RajLaxmi Hotel", image: "/images/Rajlaxmi.png" },
  { companyName: "Royal ocean Hotel", image: "/images/royalocean.png" },
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-9xl"
    >
      <CarouselContent>
        {clients.map((company, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col gap-3 text-muted-foreground">
                  <span>
                    <Image
                      src={company.image}
                      alt="Company logo"
                      width={1000}
                      unoptimized
                      className="grayscale brightness-75"
                      height={1000}
                    />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
