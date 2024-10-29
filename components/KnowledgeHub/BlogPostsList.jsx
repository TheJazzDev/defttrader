import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogPostsList = ({ blogContent }) => {
  const [page, setPage] = useState(0);
  const blogPostsPerPage = 6;
  const numPages = Math.ceil(blogContent.length / blogPostsPerPage);

  const handleNext = () => {
    if (page < numPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const visibleBlogPosts = blogContent.slice(
    page * blogPostsPerPage,
    (page + 1) * blogPostsPerPage
  );

  return (
    <div className='flex flex-col'>
      <ul className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl'>
        {visibleBlogPosts.map((post) => (
          <BlogItem
            key={post.id}
            id={post.id}
            thumbnail={post.thumbnail}
            title={post.title}
            content={post.content}
          />
        ))}
      </ul>
      <div className='flex justify-center gap-4 mt-12'>
        {numPages > 1 && (
          <>
            <button onClick={handlePrev}>Previous</button>
            <div>
              {Array.from({ length: numPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`${
                    i === page ? 'text-primaryColor font-semibold' : ''
                  } mx-2`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <button onClick={handleNext}>Next</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPostsList;
