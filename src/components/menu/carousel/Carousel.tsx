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
import { RootState } from "@/redux/store";

export function CarouselSize() {
  
  const products = useSelector((state: RootState) => state.product.product) || [];
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
          <CarouselItem key={index} className=" sm:basis-1 my-auto md:basis-1/2 lg:basis-1/3 sm:h-full w-full">
            <div className="p-2 shadow-xl rounded-lg border-2 dark:border-slate-400 border-slate-200">
              <Card className="bg-slate-800 dark:bg-white">
                <CardContent className="flex flex-col items-center justify-between p-0 h-full h[] sm:h-[50vh]">
                  {/* Product Image */}
                  <img
                    src={product.image} // Product image URL
                    alt={product.title}
                    className="w-full hover:scale-105 h-full object-cover rounded-t-lg shadow-lg"
                  />
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex " />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
