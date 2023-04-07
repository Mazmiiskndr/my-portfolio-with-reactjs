import React from 'react'

const Section = (props) => {
  return (
    <section className="min-h-fit flex flex-col justify-start
    items-center py-16 text-center px-5">
      <h3 className='py-3 text-3xl lg:text-5xl'>{props.title}</h3>
      <p className='max-w-xl font-light text-gray-500 mb-10
      text-sm md:text-base'>{props.subtitle}</p>
      
      {props.children}
    </section>
  );
}

export default Section