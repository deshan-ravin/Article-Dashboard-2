import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-red-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            WELCOME TO ARTICLE DASHBOARD
          </h2>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4 mt-8">
        <a
          href="/pages"
          className="inline-block px-6 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-red-100 hover:text-red-700 transition duration-300"
        >
          Login
        </a>
        <a
          href="/signup"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-red-700 hover:text-white transition duration-300"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}
