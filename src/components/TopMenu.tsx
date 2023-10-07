"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export const navLinks = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/about",
    title: "About",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="text-3xl text-white">Full Vercel Blog</h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {session?.user?.name ? (
          <>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
                pathname === "/post/new"
                  ? "text-white underline"
                  : "text-dimWhite"
              } `}
            >
              <Link href="/post/new">New Post</Link>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] mr-10">
              <button onClick={() => signOut()}>Logout</button>
            </li>
          </>
        ) : (
          <li className="font-poppins font-normal cursor-pointer text-[16px] mr-10">
            <button onClick={() => signIn()}>Login</button>
          </li>
        )}
        {navLinks.map((nav, index) => (
          <li
            key={nav.route}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              pathname === nav.route ? "text-white underline" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link href={nav.route}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <FontAwesomeIcon
          icon={toggle ? faXmark : faBars}
          onClick={() => setToggle(!toggle)}
          className="w-[28px] h-[28px] object-contain"
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {session?.user?.name ? (
              <>
                <li
                  className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 mb-4${
                    pathname === "/post/new"
                      ? "text-white underline"
                      : "text-dimWhite"
                  } `}
                >
                  <Link href="/post/new">New Post</Link>
                </li>
                <li className="font-poppins font-medium cursor-pointer text-[16px] mb-4">
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </>
            ) : (
              <li className="font-poppins font-medium cursor-pointer text-[16px] mb-4">
                <button onClick={() => signIn()}>Login</button>
              </li>
            )}

            {navLinks.map((nav, index) => (
              <li
                key={nav.route}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  pathname === nav.route
                    ? "text-white underline"
                    : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link href={nav.route}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const TopMenu = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
