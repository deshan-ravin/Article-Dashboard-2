"use client"
import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import DeleteBtn from "@/components/deletebtn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ArticlePage() {
  const router = useRouter();
  const [authorName, setAuthorName] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const title = url.searchParams.get('title');
    
    if (title) {
      setArticleTitle(title);
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
      <Navbar />

      <Card className="w-full max-w-3xl p-4 mt-8"> 
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{authorName}</CardTitle>
            <CardDescription className="text-gray-500">{dateCreated}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-black">{articleTitle}</h2>
          </div>
          <div>
            <p className="text-lg text-black">
              {articleContent.split("\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </CardContent>

        <div className="p-4 flex justify-between">
          <DeleteBtn/>
          <Link
            href={{
              pathname: "/update",
              query: {
                author: authorName,
                date: dateCreated,
                title: articleTitle,
                content: articleContent
              }
            }}
          >
            <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
              Update
            </button>
          </Link>
        </div>
      </Card>

      <Footer/>
    </main>
  );
}
