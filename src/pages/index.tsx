import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from '../components/Hero';
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-8">
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
