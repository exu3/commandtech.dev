import Head from "next/head";
import Button from "../components/Button";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Home" />
      <Nav />
      <main>
        <h1>hi</h1>
        <Button href="/">Join the team &rarr;</Button>
      </main>
    </div>
  );
}
