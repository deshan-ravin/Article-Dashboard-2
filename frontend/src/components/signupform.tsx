import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpForm() {
  return (
    <Card className="w-[450px]"> 
    <CardHeader>
      <CardTitle className="text-xl">Sign Up</CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">Name</Label>
          <Input id="first-name" placeholder="john dory" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="xxxxx@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full  bg-red-600 hover:bg-zinc-500">
          Create an account
        </Button>
        <Button variant="outline" className="w-full  text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300">
          Sign up with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link className="text-blue-500 hover:text-red-500 underline" href="/login">
          Sign in
        </Link>
      </div>
    </CardContent>
  </Card>
  
  )
}
