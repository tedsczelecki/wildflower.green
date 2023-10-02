import React from 'react';
import { Container } from './Container';
import { GiOakLeaf, GiPineTree, GiTreeBeehive } from 'react-icons/gi';

export const Features = () => {
  return (
    <Container className="py-16">
      <div className="flex gap-8 justify-between flex-col md:flex-row items-center">
        <div className="flex flex-col items-center justify-start gap-4 max-w-[350px] text-center">
          <GiTreeBeehive size={40} />
          <h3 className="uppercase font-title">Ready to be impressed</h3>
          <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 max-w-[350px] text-center">
          <GiPineTree size={40} />
          <h3 className="uppercase font-title">Ready to be impressed</h3>
          <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 max-w-[350px] text-center">
          <GiOakLeaf size={40} />
          <h3 className="uppercase font-title">Ready to be impressed</h3>
          <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elitin uta</p>
        </div>
      </div>
    </Container>
  );
};
