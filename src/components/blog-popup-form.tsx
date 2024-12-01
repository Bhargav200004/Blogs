import React, { useState } from "react";
import { Button } from "./ui/button";

interface BlogPopupFormProps {
  addBlog: (title: string, paragraph: string) => void;
  closePopup: () => void;
}

export default function BlogPopupForm({ addBlog, closePopup }: BlogPopupFormProps) {
  const [formData, setFormData] = useState({ title: "", paragraph: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlog(formData.title, formData.paragraph); // Call addBlog function
    setFormData({ title: "", paragraph: "" }); // Clear the form
  };

  return (
    <div className="fixed inset-0 border-2  bg-opacity-50 rounded-sm flex justify-center items-center">
      <div className="bg-slate-400 p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full  p-2 border rounded"
            required
          />
          <textarea
            name="paragraph"
            value={formData.paragraph}
            onChange={handleChange}
            placeholder="Blog Content"
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
          <div className="flex justify-end space-x-2">
            <Button type="button" className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-400" onClick={closePopup}>Cancel</Button>
            <Button type="submit">Add Blog</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
