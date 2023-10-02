import React from 'react';
import { Container } from './Container';
import { Logo } from './Logo';

import gallery from '../images/gallery.jpg';

export const Footer = () => (
  <div className="flex flex-col gap-0">
    <div className="bg-zinc-800">
      <Container className="flex justify-between max-w-[1000px] py-20">
        <div className="flex flex-col w-[350px] gap-4">
          <Logo />
          <p className="text-slate-300">Serving the Simcoe Region</p>
          <p className="text-slate-400">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitu din,
            lorem quistix bibendum auctoris
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="font-title uppercase text-slate-300 text-xl">
            Follow our instagram
          </h4>
          <div className="grid grid-cols-3 w-[300px] gap-4">
            <img src={gallery} className="aspect-square" alt="" />
            <img src={gallery} className="aspect-square" alt="" />
            <img src={gallery} className="aspect-square" alt="" />
            <img src={gallery} className="aspect-square" alt="" />
            <img src={gallery} className="aspect-square" alt="" />
            <img src={gallery} className="aspect-square" alt="" />
          </div>
        </div>
      </Container>
    </div>
    <div className="bg-zinc-900 py-4">
      <Container>
        <p className="text-slate-400 text-center">
          &copy; {new Date().getFullYear()} Wildflower. All Rights Reserved
        </p>
      </Container>
    </div>
  </div>
);
