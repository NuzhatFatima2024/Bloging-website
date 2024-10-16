"use client";

import { useState, ChangeEvent, useRef, useEffect } from "react";
import { Input } from "../compoents/input";
import { Button } from "../compoents/button";
import { Search } from "lucide-react"; 
import Link from "next/link"; // Import Link for navigation

const blogPosts = [
  {
    title: "Biryani",
    description: "Biryani",
    slug: "Biryan", // Add a slug or identifier for each post
  },
  {
    title: "Tikka",
    description: "Tikka",
    slug: "Tikka",
  },
  {
    title: "Kabab",
    description: "Kabab",
    slug: "Kabab",
  },
  {
    title: "Shami Kabab",
    description: "Shami Kabab",
    slug: "Shami Kabab",
  },
  {
    title: "Tandori Chicken",
    description: "Tandori Chicken",
    slug: "Tandori Chicken",
  },
  {
    title: "Karahi",
    description: "Karahi",
        slug: "Karahi",
  },
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts); // State for filtered posts
  const [showResults, setShowResults] = useState<boolean>(false); // State to manage results visibility
  const searchRef = useRef<HTMLDivElement | null>(null); // Ref for the search bar

  // Function to handle search input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter posts based on input
    if (value.trim() !== "") {
      const results = blogPosts.filter(post =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(results); // Update filtered posts state
      setShowResults(results.length > 0); // Show results if there are any
    } else {
      setFilteredPosts(blogPosts); // Reset when input is empty
      setShowResults(false); // Hide results when input is empty
    }
  };

  // Hide results when clicking outside the search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false); // Hide results when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="flex flex-col items-center justify-center w-full max-w-md p-4">
      {/* Input field for search */}
      <div className="flex w-full">
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />

        {/* Search button */}
        <Button
          onClick={() => console.log("Searching for:", searchTerm)} // Log for testing; you can implement further actions if needed
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-yellow transition duration-300"
        >
          <Search className="w-5 h-5" /> {/* Optional icon */}
        </Button>
      </div>
<div className="absolute">
      {/* Search results */}
      {showResults && (
        <ul className="fixed w-full mt-5 left-0 bg-gray-800 rounded-lg shadow-md max-h-60 overflow-y-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.slug} className="p-2 border-2 border-transparent hover:bg-gray-700 hover:border-offwhite transition duration-150">
                <Link href={`/posts/${post.slug}`} className="text-white">
                  {post.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-400">No results found.</li>
          )}
        </ul>
      )}
      </div>
    </div>
  );
}