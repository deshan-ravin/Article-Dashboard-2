import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav";
import { ArticleCard } from "@/components/articlecard";
import Article from "@/lib/types";

export default function Home() {
  const articles: Article[] = [
    {
      authorName: "John Doe",
      dateCreated: "2024-07-20",
      articleTitle: "Understanding TypeScript",
      articleContent: "This article explains the basics of TypeScript, a typed superset of JavaScript."
    },
    {
      authorName: "Jane Smith",
      dateCreated: "2024-07-19",
      articleTitle: "Getting Started with Next.js",
      articleContent: "Learn how to build a simple application using the Next.js framework."
    },
    {
      authorName: "Alice Johnson",
      dateCreated: "2024-07-18",
      articleTitle: "Spring Boot for Beginners",
      articleContent: "An introduction to Spring Boot and its core features."
    },
    {
      authorName: "Bob Brown",
      dateCreated: "2024-07-17",
      articleTitle: "Advanced AWS Techniques",
      articleContent: "This article covers advanced techniques and best practices for using AWS services."
    }
  ];

  const userName = " Deshan";

  return (
    
    <main className="flex flex-col  justify-between pb-20 pt-2 bg-zinc-300 min-h-screen">
  <NavBar />

        <h1 className="text-6xl font-bold text-left flex mt-10 mb-4 ml-20 text-zinc-700">
        Hello!  <div className="text-red-600"> {userName} 👋</div>
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
            {
              articles.map((article, index) => (
                <ArticleCard key={index} articleTitle={article.articleTitle}/>
              ))
            }
        </div>

  <Footer />
</main>

  );
}
