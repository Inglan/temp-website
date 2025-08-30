import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-4 items-start max-w-96 p-4">
        <h1 className="text-4xl">
          <span className="text-xl">Hi, I'm</span>
          <br />
          <span className="text-4xl text-primary font-bold">Ingo Wolf</span>
        </h1>
        I build websites, webapps, and other random stuff
        <div className="flex flex-row gap-2 flex-wrap min-w-full">
          <Button variant="secondary" asChild>
            <Link href="https://github.com/Inglan" target="_blank">
              Github
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="mailto:me@ingo.au">Email</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link
              href="https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB"
              target="_blank"
            >
              Signal
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
