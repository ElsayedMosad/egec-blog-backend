import Link from "next/link";

import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Aside() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = (link) => {
    console.log(link);
    setActiveLink((prevActive) => (prevActive === link ? null : link));
    console.log(link);
    console.log(activeLink);

    setClicked(false);
  };
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <aside className="asideleft active">
        <ul>
          <Link href="/">
            <li className="navactive">
              <IoHome />
              <span>Dashboard</span>
            </li>
          </Link>
          <li
            className={
              activeLink === "/blogs"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/blogs")}
          >
            <div className="flex gap-1">
              <BsPostcard />
              <span>Blogs</span>
            </div>
            {activeLink === "/blogs" && (
              <ul>
                <Link href="/">
                  <li>All Blogs</li>
                </Link>
                <Link href="/">
                  <li>Draft Blogs</li>
                </Link>
                <Link href="/">
                  <li>Add Blogs</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/projects"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/projects")}
          >
            <div className="flex gap-1">
              <BsPostcard />
              <span>projects</span>
            </div>
            {activeLink === "/projects" && (
              <ul>
                <Link href="/">
                  <li>All projects</li>
                </Link>
                <Link href="/">
                  <li>Draft projects</li>
                </Link>
                <Link href="/">
                  <li>Add projects</li>
                </Link>
              </ul>
            )}
          </li>
        </ul>
      </aside>
    </>
  );
}
