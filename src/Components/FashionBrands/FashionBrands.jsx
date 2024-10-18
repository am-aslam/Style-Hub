import React from 'react'
import ImageLog1 from '../Asset/blog-1.jpg';
import ImageLog2 from '../Asset/blog-2.jpg';
import ImageLog3 from '../Asset/blog-3.jpg';


const FashionBlog = () => {
  const BlogItem = ({ imgSrc, title }) => (
    <div>
      <img src={imgSrc} alt="Blog" className="w-full" />
      <h5 className="text-center font-bold mt-4">{title}</h5>
    </div>
  );
  
  return (
    <section className="fashion-blog my-20">
      <div className="title-style text-center mb-8">
        <h1 className="text-4xl">Latest Fashion Blog</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogItem imgSrc={ImageLog1} title="Buy 1 Get 1 free" />
        <BlogItem imgSrc={ImageLog2} title="New style 50% off" />
        <BlogItem imgSrc={ImageLog3} title="New Shoes Collection" />
      </div>
    </section>
  );
};

export default FashionBlog;
