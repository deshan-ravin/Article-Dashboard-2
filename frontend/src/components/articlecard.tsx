import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Article from "@/lib/types"
import Link from "next/link";

interface ArticleProps {
  articleContent: string;
  articleTitle: string;
}

export function ArticleCard(props: ArticleProps) {
  return (
    

    <Link
            href={{
              pathname: "/article",
              query: {
                title: "props.articleTitle",
                content: "props.articleContent"
              }
                  }} > 
            <Card className="w-[350px] h-[400px] overflow-auto bg-white shadow-lg rounded-lg p-4">
      <h1 className="text-2xl font-bold font-sans w-full mt-2">
         { props.articleTitle} </h1>
          <p className="mt-5">{props.articleContent}</p>
                
    </Card>
    </Link>

  )
}
