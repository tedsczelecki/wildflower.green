import React from 'react';
import heroImage from '../images/hero.jpg';
import { Container } from './Container';

export const Hero = () => {
  return (
    <div className="h-[80vh] w-full min-h-[800px] relative flex flex-col justify-center">
      <Container className="flex justify-between items-center z-20 p-3 h-fit">
        <div className="text-white font-title text-[32px]">Wildflower</div>
        <nav className="">
          <ul className="flex gap-5 m-0">
            <li>
              <a href="#services" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
      <Container className="flex-1 z-20 relative">
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
          <h1 className="font-accent text-[72px] text-white flex flex-col leading-none text-center">
            Welcome to Wildflower
            <span className="font-title text-white uppercase">
              Perfect Bouquet
            </span>
          </h1>
          <p className="text-white max-w-[700px] w-full text-center font-body text-[18px]">
            A simply gorgeous Wordpress theme packed with everything you will
            need to create a delightful website for your flower shop or flourist
            business quickly and with ease
          </p>
          <div className="flex gap-5">
            <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
              Button
            </button>
          </div>
        </div>
      </Container>
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-b from-gray-900 to-gray-700">
        <img
          src={heroImage}
          alt="Welcome to Wildflowers"
          className="w-full h-full object-cover object-bottom opacity-50"
        />
      </div>
    </div>
  );
};
