import * as React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  // Assuming your state has an array of products with image URLs
  const products = useSelector((state: any) => state.product.product) || [];

  // Choose 5 random products for the carousel
  const randomProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90vw] mx-auto h-full mt-8"
    >
      <div className="">
        <h1 className="text-4xl font-bold mb-4 pl-14 text-white">Explore Our Products</h1>
      </div>
      <CarouselContent>
        {randomProducts.map((product, index) => (
          <CarouselItem key={index} className=" sm:basis-1 md:basis-1/2 lg:basis-1/3 sm:h-full w-full">
            <div className="p-2 shadow-xl rounded-lg border-2 border-slate-600">
              <Card className="bg-slate-800 dark:bg-white">
                <CardContent className="flex flex-col items-center justify-between p-0 h-full sm:h-[40vh]">
                  {/* Product Image */}
                  <img
                    src={product.image} // Product image URL
                    alt={product.name}
                    className="w-full hover:scale-105 h-full object-cover rounded-t-lg shadow-lg"
                  />
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block" />
    </Carousel>
  );
}
