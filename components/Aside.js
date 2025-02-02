import Link from "next/link";

import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdWorkOutline } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";

export default function Aside({ asideOpen, handleAsideOpen }) {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = (link) => {
    // console.log(link);
    setActiveLink((prevActive) => (prevActive === link ? null : link));
    // console.log(link);
    // console.log(activeLink);

    setClicked(false);
  };
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <aside className={asideOpen ? "asideleft active" : "asideleft"}>
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
              <MdWorkOutline />
              <span>Blogs</span>
            </div>
            {activeLink === "/blogs" && (
              <ul>
                <Link href="/blogs">
                  <li>All Blogs</li>
                </Link>
                <Link href="/blogs/draft">
                  <li>Draft Blogs</li>
                </Link>
                <Link href="/blogs/addblog">
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
                <Link href="/projects">
                  <li>All projects</li>
                </Link>
                <Link href="/projects/draftprojects">
                  <li>Draft projects</li>
                </Link>
                <Link href="/projects/addproject">
                  <li>Add projects</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/shops"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/shops")}
          >
            <div className="flex gap-1">
              <RiShoppingCartLine />
              <span>Shops</span>
            </div>
            {activeLink === "/shops" && (
              <ul>
                <Link href="/shops">
                  <li>All shops</li>
                </Link>
                <Link href="/shops/draftshop">
                  <li>Draft shops</li>
                </Link>
                <Link href="/shops/addproduct">
                  <li>Add shops</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/gallery"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/gallery")}
          >
            <div className="flex gap-1">
              <GrGallery />
              <span>Gallery</span>
            </div>
            {activeLink === "/gallery" && (
              <ul>
                <Link href="/gallery">
                  <li>All gallery</li>
                </Link>
                <Link href="/gallery/addphoto">
                  <li>Add gallery</li>
                </Link>
              </ul>
            )}
          </li>
          <Link href="/contacts">
            <li
              className={activeLink === "/contacts" ? "navactive" : ""}
              onClick={() => handleLinkClick("/contacts")}
            >
              <TiContacts />
              <span>Contacts</span>
            </li>
          </Link>
          <Link href="/setting">
            <li
              className={activeLink === "/setting" ? "navactive" : ""}
              onClick={() => handleLinkClick("/setting")}
            >
              <IoSettingsOutline />
              <span>setting</span>
            </li>
          </Link>
        </ul>
        <button className="logoutbtn">Logout</button>
      </aside>
    </>
  );
}
