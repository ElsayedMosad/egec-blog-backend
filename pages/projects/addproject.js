import Project from "@/components/Project";
// import BlogTwo from "@/components/BlogTwo";
import { SiBloglovin } from "react-icons/si";

export default function AddProject() {
  return (
    <>
      <div className="addblogspage">
        <div className="titledashboard flex flex-sb">
          <div>
            <h2>
              Add <span>Project</span>
            </h2>
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="breadcrumb">
            <SiBloglovin /> <span>/</span> <span>Add Project</span>
          </div>
        </div>
        <div className="blogsadd">
          <Project />
        </div>
      </div>
    </>
  );
}
