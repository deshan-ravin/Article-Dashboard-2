import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav";
import { ArticleCard } from "@/components/articlecard";

export default function Home() {

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
            <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
                Create New Article
            </button>
        </div>



        <h3 className="text-2xl font-bold font-sans w-full text-center border-b border-red-500 dark:border-trueGray-700 pt-5 mb-0">
            Your Articles
        </h3>
        <div className="flex flex-wrap items-center justify-center w-full max-w-1xl gap-5 mt-10 mx-auto">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>

  <Footer />
</main>

  );
}
