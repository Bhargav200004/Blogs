"use client"

import BlogSection from "@/components/blog-section";
import CardWithForm from "@/components/form-card";
import SearchBar from "@/components/search-bar";
import ThemeToggler from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";


interface BlogSectionProps {
  serialNo: number;
  title: string;
  paragraph: string;
}


export default function Home() {

  const [blogData, setBlogData] = useState<BlogSectionProps[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to toggle the popup
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // const blogData : BlogSectionProps[] = [
  //   {  title: "First Post", paragraph: "This is the first blog post content." },
  //   {  title: "Second Post", paragraph: "This is the second blog post content." },
  //   {  title: "Third Post", paragraph: "This is the third blog post content." },
  // ];

   // Function to add a new blog
   const addBlog = (title: string, paragraph: string) => {
    setBlogData((prevBlogs) => [
      ...prevBlogs,
      {
        serialNo: prevBlogs.length,
        title,
        paragraph,
      },
    ]);
    setIsPopupOpen(false); // Close the popup after adding a blog
  };

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-10">
      
      <nav className="w-full flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <Button onClick={() => setIsPopupOpen(true)} >ADD</Button>
            <Button >DELETE</Button>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggler />
          </div>
      </nav>

      <h1 className="text-7xl mb-8 tracking-tight font-bold text-center">
        Blogs
      </h1>

      <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      
      {isPopupOpen && <CardWithForm addBlog={addBlog} closePopup={() => setIsPopupOpen(false)} />}

      {/* {isPopupOpen && <BlogPopupForm addBlog={addBlog} closePopup={() => setIsPopupOpen(false)} />} */}

      <div className="border-2 rounded-sm shadow-sm space-y-8 p-4">
      {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs to display.</p>
        ) : (
          filteredBlogs.map((blog, index) => (
            <BlogSection
              key={index}
              serialNo={index}
              title={blog.title}
              paragraph={blog.paragraph}
            />
          ))
        )}
        <div>
          <Button>Load more</Button>
        </div>
      </div>
    </main>
  );
}
