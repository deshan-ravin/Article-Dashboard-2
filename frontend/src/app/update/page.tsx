import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";

export default function CreatArticle() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
      <Navbar />

      <Card className="w-full max-w-3xl p-4 mt-8"> 
        <CardHeader>
          <CardTitle>Update Your Article</CardTitle>
          <CardDescription className="text-red-500">
                ARTICLE DASHBOARD 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Title 
                <CardDescription className="text-red-500">
                    (Update Title) 
                </CardDescription>
              </Label>
              <Input
                id="title"
                type="text"
                className="w-full"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content
              <CardDescription className="text-red-500">
                    (Update Content) 
              </CardDescription>
              </Label>
              <Textarea
                id="content"
                className="h-60 w-full"
              />
            </div>
          </div>
        </CardContent>

       <div className="p-4 flex justify-between">
            <button className="px-6 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300">
                Cancel
            </button>
            <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
                Update
        </button>
</div>


      </Card>

      <Footer/>
    </main>
  );
}
