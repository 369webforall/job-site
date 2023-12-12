import React from 'react';
import Link from 'next/link';
const BlogSection = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl">Blogs</h2>
      <div className="mt-6 border-b pb-6">
        <p className="text-sm italic font-sans"> 01-11-2023</p>
        <Link href="/blogs">
          <h3 className="font-semibold md:text-xl font-sans">
            Was macht eine Personalvermittlung?
          </h3>
        </Link>
      </div>
      <div className="mt-6 border-b pb-6">
        <p className="text-sm italic font-sans"> 04-12-2023</p>
        <Link href="/blogs/first">
          <h3 className="font-semibold md:text-xl font-sans">
            Meistern Sie Ihr Recruiting Meisterstück im Jahr 2024!
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
