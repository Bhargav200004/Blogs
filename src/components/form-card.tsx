"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface BlogPopupFormProps {
    addBlog: (title: string, paragraph: string) => void;
    closePopup: () => void;
  }


export default function CardWithForm({ addBlog, closePopup }: BlogPopupFormProps) {

const [formData, setFormData] = useState({ title: "", paragraph: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlog(formData.title, formData.paragraph); 
    setFormData({ title: "", paragraph: "" }); 
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add a New Blog</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Input
                id="title"
                name="title"
                placeholder="Title of blog"
                value={formData.title} 
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="paragraph"
                name="paragraph"
                placeholder="Description...."
                value={formData.paragraph}
                onChange={handleChange}
              />
            </div>  
          </div>
        </form>
      </CardContent>
      <CardFooter className="fSlex justify-between">
        <Button variant="outline" onClick={closePopup}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

