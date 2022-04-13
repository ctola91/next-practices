import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import { Navbar } from "../components/Navbar";

export default function About() {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h1 className="title">
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
