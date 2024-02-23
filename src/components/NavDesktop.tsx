import { routes } from "../routes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const NavDesktop = () => {
  return (
    <div className="hidden lg:flex lg:items-center sticky top-0 z-50 backdrop-blur justify-between mx-10">
      <div>
        <Link href="/">
          <Image
            src="/pictures/KITE.png"
            alt="KITE Logo"
            width={120}
            height={120}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div>
        <ul className="lg:flex gap-5 text-xl">
          {routes.map((route) => {
            const { Icon, href, title } = route;
            return (
              <li key={title}>
                <a
                  href={href}
                  className="flex items-center gap-1 hover:text-neutral-400 transition-all"
                >
                  <Icon />
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
