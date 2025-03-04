import Link from "next/link";
import { IoHome, IoSettingsOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

export default function Aside({ asideOpen }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/");

  // تحديث الرابط النشط عند تغيير المسار
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  // التنقل بين الصفحات مع فرض التحديث إذا كنا بنفس المسار
  const handleLinkClick = useCallback(
    (link) => {
      if (router.pathname === link) {
        router.replace(link);
      } else {
        router.push(link);
      }
      setActiveLink(link);
    },
    [router]
  );

  return (
    <aside className={asideOpen ? "asideleft active" : "asideleft"}>
      <ul>
        {/* Dashboard */}
        <li
          className={activeLink === "/" ? "navactive" : ""}
          onClick={() => handleLinkClick("/")}
        >
          <IoHome />
          <span>Dashboard</span>
        </li>

        {/* Blogs */}
        <li
          className={
            activeLink.includes("/blogs")
              ? "navactive flex-col flex-left"
              : "flex-col flex-left"
          }
          onClick={() => handleLinkClick("/blogs")}
        >
          <div className="flex gap-1">
            <MdWorkOutline />
            <span>Blogs</span>
          </div>
          {activeLink.includes("/blogs") && (
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

        {/* Projects */}
        <li
          className={
            activeLink.includes("/projects")
              ? "navactive flex-col flex-left"
              : "flex-col flex-left"
          }
          onClick={() => handleLinkClick("/projects")}
        >
          <div className="flex gap-1">
            <BsPostcard />
            <span>Projects</span>
          </div>
          {activeLink.includes("/projects") && (
            <ul>
              <Link href="/projects">
                <li>All Projects</li>
              </Link>
              <Link href="/projects/draftprojects">
                <li>Draft Projects</li>
              </Link>
              <Link href="/projects/addproject">
                <li>Add Projects</li>
              </Link>
            </ul>
          )}
        </li>

        {/* Shops */}
        <li
          className={
            activeLink.includes("/shops")
              ? "navactive flex-col flex-left"
              : "flex-col flex-left"
          }
          onClick={() => handleLinkClick("/shops")}
        >
          <div className="flex gap-1">
            <RiShoppingCartLine />
            <span>Shops</span>
          </div>
          {activeLink.includes("/shops") && (
            <ul>
              <Link href="/shops">
                <li>All Shops</li>
              </Link>
              <Link href="/shops/draftshop">
                <li>Draft Shops</li>
              </Link>
              <Link href="/shops/addproduct">
                <li>Add Shops</li>
              </Link>
            </ul>
          )}
        </li>

        {/* Gallery */}
        <li
          className={
            activeLink.includes("/gallery")
              ? "navactive flex-col flex-left"
              : "flex-col flex-left"
          }
          onClick={() => handleLinkClick("/gallery")}
        >
          <div className="flex gap-1">
            <GrGallery />
            <span>Gallery</span>
          </div>
          {activeLink.includes("/gallery") && (
            <ul>
              <Link href="/gallery">
                <li>All Gallery</li>
              </Link>
              <Link href="/gallery/addphoto">
                <li>Add Gallery</li>
              </Link>
            </ul>
          )}
        </li>

        {/* Contacts */}
        <li
          className={activeLink === "/contacts" ? "navactive" : ""}
          onClick={() => handleLinkClick("/contacts")}
        >
          <TiContacts />
          <span>Contacts</span>
        </li>

        {/* Settings */}
        <li
          className={activeLink === "/setting" ? "navactive" : ""}
          onClick={() => handleLinkClick("/setting")}
        >
          <IoSettingsOutline />
          <span>Setting</span>
        </li>
      </ul>

      <button className="logoutbtn">Logout</button>
    </aside>
  );
}
