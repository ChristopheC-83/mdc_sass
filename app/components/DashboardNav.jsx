"use client";
import { Notebook, Settings, CreditCard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function DashboardNav() {
  const pathname = usePathname();
  const session = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/");
  }
  const menuItems = [
    {
      name: "Notes",
      icon: Notebook,
      path: "/dashboard/notes",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
    {
      name: "Payment",
      icon: CreditCard,
      path: "/dashboard/payment",
    },
  ];

  return (
    <nav className={`flex md:flex-col md:h-full w-full md:w-16 lg:w-40 gap-2`}>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`flex items-center justify-center  p-2 lg:p-6 w-full h-12 rounded-lg ${
            pathname === item.path
              ? "bg-primary-foreground text-primary"
              : "text-primary-foreground"
          }  hover:bg-primary-foreground/40 `}
        >
          <item.icon
            className={`w-6 h-6 ${
              pathname === item.path
                ? "text-primary"
                : "text-primary-foreground"
            }`}
          />
          <span className={`ml-2 max-lg:hidden`}>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
