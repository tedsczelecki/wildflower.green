import React from 'react';

type Props = {
  subTitle: string;
  title: string;
};

export const SectionTitle = ({ subTitle, title }: Props) => (
  <h2 className="text-xl md:text-4xl flex flex-col items-center leading-[3rem] md:leading-[4rem]">
    <span className="font-accent text-[48px] md:text-[72px]">{title}</span>
    <span className="font-title uppercase">{subTitle}</span>
  </h2>
);
