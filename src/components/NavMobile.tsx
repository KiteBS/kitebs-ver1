import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import Link from "next/link";
import Image from "next/image";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="sticky top-0 z-50 backdrop-blur lg:hidden ">
      <div className="flex items-center justify-between mx-5 mt-5">
        {/*Burger menu */}
        <div>
          <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-5 fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-5 bg-neutral-950 border-b border-b-white/20"
              >
                <ul className="grid gap-2">
                  {routes.map((route, idx) => {
                    const { Icon } = route;

                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={route.title}
                        className="w-full p-[0.08rem] rounded-xl bg-white"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-between w-full p-5 rounded-xl bg-white"
                          }
                          href={route.href}
                        >
                          <span className="flex gap-1 text-lg">
                            {route.title}
                          </span>
                          <Icon className="text-xl" />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/*Title */}
        <div>
          <Link href="/" className="text-xl">
            <h1>Kite Business Solutions</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
