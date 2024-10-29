import React from 'react';
import BlogPostsList from './BlogPostsList';

const KnowledgeHub = ({ blogContent }) => {
  return (
    <div className='pt-24 lg:pt-32 px-4'>
      <h1 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mx-auto w-fit mb-8 leading-loose tracking-wide'>
        KNOWLEDGE HUB
      </h1>
      <p className='text-justify max-w-5xl mx-auto'>
        Find helpful tips and information from the world of trading — technical
        analysis, fundamental analysis, market outlooks and more.
      </p>
      <div className='mx-auto w-fit'>
        <h2 className='text-xl font-semibold w-fit text-center mx-auto my-12'>
          OUR LATEST BLOG
        </h2>
        <BlogPostsList blogContent={blogContent} />
      </div>
    </div>
  );
};

export default KnowledgeHub;
