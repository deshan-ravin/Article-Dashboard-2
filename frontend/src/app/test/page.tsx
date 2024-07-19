import Link from "next/link";
import ThemeChanger from "../../components/darkswitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { CardWithForm } from "../newarticle/newarticle";

export default function Pages() {
  return (
    <>
     <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24">
     <h1 className="text-4xl font-bold mb-2 text-red-500">Article Dashboard</h1>
  <div>
    <CardWithForm/>
  </div>
</main>

    </>
  );
}
