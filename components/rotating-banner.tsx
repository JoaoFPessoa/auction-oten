"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Os 10 leilões mais disputados de 2023",
    excerpt:
      "Descubra quais foram os itens mais cobiçados nos leilões deste ano.",
    image: "/mock-images/blog/first-blog-image.jpg",
  },
  {
    id: 2,
    title: "Como preparar-se para seu primeiro leilão",
    excerpt: "Dicas essenciais para quem está começando no mundo dos leilões.",
    image: "/mock-images/blog/second-blog-image.jpg",
  },
  {
    id: 3,
    title: "Leilões online vs. presenciais: prós e contras",
    excerpt:
      "Analisamos as vantagens e desvantagens de cada modalidade de leilão.",
    image: "/mock-images/blog/third-blog-image.jpg",
  },
];

export function RotatingBanner() {
  const [currentPost, setCurrentPost] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentPost((prev) => (prev + 1) % blogPosts.length);
    }, 2000);
  }, []);

  const stopRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, [startRotation, stopRotation]); // Added dependencies to useEffect

  return (
    <div
      className="relative w-full h-[600px]"
      onMouseEnter={stopRotation}
      onMouseLeave={startRotation}
    >
      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentPost ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
