import React from 'react';
import { Container } from './Container';
import { SectionTitle } from './SectionTitle';

import gallery from '../images/gallery.jpg';

export const About = () => (
  <Container className="flex flex-col gap-10 md:gap-20 py-[3rem] md:py-[7rem] max-w-[1000px]">
    <SectionTitle subTitle="All about me" title="The Passion" />
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
      <img
        src={gallery}
        className="aspect-square max-w-[400px] w-full object-cover"
        alt=""
      />
      <div className="flex flex-col gap-5 max-w-[500px] md:max-w-full">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sed arcu metus. Cras malesuada orci vel ipsum interdum, nec pharetra
          lectus interdum. Donec varius ex quis ullamcorper scelerisque.
          Praesent facilisis commodo sollicitudin. Phasellus pellentesque
          imperdiet est, nec porta nulla facilisis tristique. Sed eget mauris
          libero. Nulla tincidunt quam sit amet varius ullamcorper. In orci
          orci, luctus id tempor quis, pulvinar in urna. In tempor euismod
          ligula, nec lobortis dui commodo sit amet. Ut nec nulla pulvinar,
          semper mauris ut, lobortis leo. Suspendisse a faucibus odio, id
          iaculis orci. Ut commodo tempus condimentum. Mauris iaculis tellus
          eget dui faucibus, ut fermentum diam dictum. Nulla facilisi. Nulla
          vulputate, lacus vel eleifend efficitur, orci ante finibus ex, at
          malesuada tortor tellus vel massa.
        </p>

        <p>
          Maecenas scelerisque nulla fringilla eros pharetra, eu euismod est
          malesuada. Donec pulvinar nibh felis, eget malesuada nisl venenatis
          non. Ut neque nulla, molestie vitae neque eu, tempus sollicitudin leo.
          Praesent ullamcorper ligula felis, et pretium neque faucibus eget.
          Mauris ipsum tortor, finibus at massa eget, sodales rhoncus risus.
          Duis nec cursus est. Aliquam erat volutpat. Nunc porta nisl quam, quis
          blandit libero suscipit eget. Integer ut congue odio. Quisque mollis
          faucibus ligula eget efficitur. Mauris aliquam porta nisl, et sodales
          velit sollicitudin nec. Vestibulum iaculis tellus ut neque auctor
          aliquet. Vestibulum purus est, mollis sed justo rhoncus, rhoncus
          blandit sapien.
        </p>
      </div>
    </div>
  </Container>
);
