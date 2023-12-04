import React from 'react';
import BlogSection from './BlogSection';

const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="flex gap-4 w-full  flex-col md:flex-row">
        <div className="md:w-[85%]">{children}</div>
        <div className="flex mt-20 justify-center border-l px-2 md:w-[15%]">
          <BlogSection />
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
