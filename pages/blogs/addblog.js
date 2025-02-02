import Blog from "@/components/Blog";
// import BlogTwo from "@/components/BlogTwo";
import { SiBloglovin } from "react-icons/si";

export default function Addblog() {
  return (
    <>
      <div class="addblogspage">
        <div class="titledashboard flex flex-sb">
          <div>
            <h2>
              Add <span>Blog</span>
            </h2>
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="breadcrumb">
            <SiBloglovin /> <span>/</span> <span>Addblog</span>
          </div>
        </div>
        <div class="blogsadd">
          <Blog />
        </div>
      </div>
    </>
  );
}
