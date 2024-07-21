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
  articleTitle: string;
}

export function ArticleCard(props: ArticleProps) {
  return (
    
            <Card className="w-[350px] h-[400px] overflow-auto bg-white shadow-lg rounded-lg p-4">
      <h1> { props.articleTitle} </h1>
      <Link
            href={{
              pathname: "/article",
              query: {
                title: props.articleTitle,
              }
            }}
          > <p>Read more....</p>          </Link>
    </Card>

  )
}
