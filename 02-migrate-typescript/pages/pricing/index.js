import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import MainLayout from "../../components/layouts/MainLayout";

export const Pricing = () => {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
};

Pricing.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default Pricing;