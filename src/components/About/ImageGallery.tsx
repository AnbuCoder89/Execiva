import React from "react";
import clsx from "clsx";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ImageGallery = (props: Gallery7Props) => {
  const { heading, description, images } = {
    ...Gallery7Defaults,
    ...props,
  };
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 font-sf-pro-display md:mb-6">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid auto-cols-fr justify-center gap-6 md:grid-cols-2 md:gap-8">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.url}
              className={clsx("inline-block w-full group", {
                "col-start-1 col-end-2 row-start-1 row-end-3": index === 0,
              })}
            >
              <div
                className={clsx("relative size-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300", {
                  "pt-[100%]": index === 0,
                  "pt-[56.25%]": index !== 0,
                })}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery7Defaults: Props = {
  heading: "Our Journey in Images",
  description: "Explore the moments that define our story and the experiences that shape our vision for the future.",
  images: [
    {
      url: "#",
      src: "/image/vision/vision-1.jpeg",
      alt: "Team collaboration and innovation",
    },
    {
      url: "#",
      src: "/image/vision/vision-2.jpeg",
      alt: "Technology and development process",
    },
    {
      url: "#",
      src: "/image/vision/vision-3.jpeg",
      alt: "Client success and partnership",
    },
  ],
};

export default ImageGallery;