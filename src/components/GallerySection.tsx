import React from 'react';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';

import gallery from '../images/gallery.jpg';

const GalleryItem = () => (
  <div className="flex flex-col items-center gap-3 w-full">
    <img src={gallery} className="aspect-square object-cover pb-4" alt="" />
    <p className="font-title text-xl uppercase leading-none">Gallery Image</p>
    <p className="font-body text-md text-gray-500 leading-none">Sub text</p>
  </div>
);

export const GallerySection = () => {
  return (
    <div className="bg-[#DCEEDF] px-5 py-[3rem] md:py-[7rem]">
      <Container className="flex flex-col gap-10 md:gap-20">
        <SectionTitle
          subTitle="Our Wonderful Arrangements"
          title="Wonderful Gift"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </Container>
    </div>
  );
};
