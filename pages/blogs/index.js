import { SiBloglovin } from "react-icons/si";

export default function Blogs() {
  return (
    <>
      <div className="blogpage">
        <div className="titledashboard flex flex-sb">
          <div>
            <h2>
              All Published <span>Blogs</span>
            </h2>
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="breadcrumb">
            <SiBloglovin /> <span>/</span>
            <span>Addblog</span>
          </div>
        </div>
        <div className="blogstable">
          <div className="flex gap-2 mb-1">
            <h2>Search Blogs:</h2>
            <input type="text" placeholder="Search by title..." />
          </div>
        </div>
      </div>
    </>
  );
}
