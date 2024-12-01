import React from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ searchQuery, handleSearchChange }: SearchBarProps) {
  return (
    <div className="flex justify-center items-center space-x-2 my-6">
      <Input
        type="text"
        placeholder="Search"
        className="w-1/2 p-2 border rounded-md"
        value={searchQuery} // Bind the value of the search input to the state
        onChange={handleSearchChange} // Call the handler when the user types
      />
    </div>
  );
}
