import DashboardNav from "../components/DashboardNav";

import {  useSession } from "next-auth/react";

export default async function DashboardLayout({ children }) {
  return (
    <section
      className={`container my-6 mx-auto md:flex md:items-center md:gap-4 min-h-full p2`}
    >
      <DashboardNav />
      <div className="w-full h-full">{children}</div>
    </section>
  );
}
