"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/articlecard";
import Article from "@/lib/types";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userName = "Deshan";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        setError("Failed to fetch articles");
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className="flex flex-col justify-between pb-20 pt-2 bg-zinc-300 min-h-screen">
      <NavBar />

      <h1 className="text-6xl font-bold text-left flex mt-10 mb-4 ml-20 text-zinc-700">
        Hello! <div className="text-red-600">{userName} 👋</div>
      </h1>

      <h2 className="text-5xl font-bold font-sans mt-1 w-full text-center mb-8">
        Welcome to your Article Dashboard 📟
      </h2>

      <div className="flex items-center justify-center py-10 bg-zinc-300">
        <a href="/create">
          <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
            Create New Article
          </button>
        </a>
      </div>

      <h3 className="text-2xl font-bold font-sans w-full text-center border-b border-red-500 dark:border-trueGray-700 pt-5 mb-0">
        Articles
      </h3>
      <div className="flex flex-wrap items-center justify-center w-full max-w-1xl gap-5 mt-10 mx-auto">
        {error && <p className="text-red-500">{error}</p>}
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            articleTitle={article.articleTitle}
            articleContent={article.articleContent}
            authorName={article.authorName}
            dateCreated={article.dateCreated}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
