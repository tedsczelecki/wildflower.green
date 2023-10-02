import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { GallerySection } from '../components/GallerySection';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Features />
      <GallerySection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
