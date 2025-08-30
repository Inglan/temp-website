import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-4 items-start max-w-96 p-4">
        <h1 className="text-4xl">
          <span className="text-xl">Hi, I'm</span>
          <br />
          <span className="text-4xl text-primary">Ingo Wolf</span>
        </h1>
        I build websites, webapps, and random stuff
      </main>
    </div>
  );
}
