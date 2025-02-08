import ReactMarkdown from "react-markdown";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import Spinner from "./Spinner";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
export default function Blog({ _id }) {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [images, setImages] = useState([]);
  const [blogcategory, setBlogcategory] = useState("");
  const [description, setDescription] = useState([]);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("");

  const [isUploading, setIsUpLoading] = useState(false);
  const uploadImagesQueue = [];

  async function createBlog(ev) {
    ev.preventDefault();
    const data = {
      title,
      slug,
      images,
      description,
      blogcategory,
      tags,
      status,
    };
    if (_id) {
      await axios.put("api/blogs", { ...data, _id });
      toast.success("Data Updated");
    } else {
      await axios.post("api/blogs", data);
      toast.success("Blog Created");
    }
    setRedirect(true);
  }

  const handleSlugChange = (ev) => {
    const inputValue = ev.target.value;
    const newSlug = inputValue.replace(/\s+/g, "-");
    setSlug(newSlug);
  };
  return (
    <>
      <form
        className="bg-gray-100 shadow-lg rounded-2xl p-6 addWebsiteform"
        onSubmit={createBlog}
      >
        {/* Title Field */}
        <div className="flex flex-col items-start mb-4">
          <label htmlFor="title" className="text-gray-800 font-semibold w-full">
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter small title"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>

        {/* Slug Field */}
        <div className="flex flex-col items-start mb-4">
          <label htmlFor="slug" className="text-gray-800 font-semibold w-full">
            Slug:
          </label>
          <input
            type="text"
            id="slug"
            placeholder="Enter Slug URL"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={slug}
            onChange={handleSlugChange}
          />
        </div>

        {/* Category Select */}
        <div className="flex flex-col items-start mb-4">
          <label
            htmlFor="category"
            className="text-gray-800 font-semibold w-full"
          >
            Category:
          </label>
          <select
            id="category"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) =>
              setBlogcategory(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            value={blogcategory}
          >
            <option value="Node Js">Node Js</option>
            <option value="React Js">React Js</option>
            <option value="Next Js">Next Js</option>
            <option value="Css">CSS</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Flutter Dev">Flutter Dev</option>
            <option value="Database">Database</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="flex flex-col items-start mb-4">
          <label
            htmlFor="images"
            className="text-gray-800 font-semibold w-full "
          >
            Upload Images:
          </label>
          <div className="relative w-full  border-dashed border-2 border-gray-300 rounded-lg p-4 flex items-center justify-center bg-white cursor-pointer hover:border-indigo-500 transition">
            <input
              type="file"
              id="fileInput"
              className="absolute inset-0 w-full h-full cursor-pointer"
              accept="image/*"
              multiple
            />
            <div className="flex flex-col items-center">
              <FaCloudUploadAlt className="text-indigo-500 text-3xl" />
              <span className="text-gray-500">
                Click or drag files to upload
              </span>
            </div>
          </div>
          <div className="w-100 flex flex-left mt-1">
            <Spinner />
          </div>
        </div>

        <div className="description w-100 flex flex-col flex-left nb-2">
          <label htmlFor="description">
            Blog content (for image: first upload and copy link and paste in
            ![alt text](link))
          </label>
          <MarkdownEditor
            style={{ width: "100%", height: "400px" }}
            renderHTML={(text) => (
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(
                      className || "language-plaintext"
                    );
                    if (inline) {
                      return <code>{children}</code>;
                    } else if (match) {
                      return (
                        <div style={{ position: "relative" }}>
                          <pre
                            style={{
                              padding: "10px",
                              borderRadius: "5px",
                              overflow: "auto",
                              background: "#f5f5f5",
                              whiteSpace: "pre-wrap",
                              position: "relative",
                            }}
                            {...props}
                          >
                            <code>{children}</code>
                          </pre>
                          <button
                            style={{
                              position: "absolute",
                              top: "5px",
                              right: "10px",
                              background: "rgba(0, 0, 0, 0.7)",
                              color: "white",
                              padding: "5px",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              navigator.clipboard.writeText(children?.[0] || "")
                            }
                          >
                            Copy Code
                          </button>
                        </div>
                      );
                    } else {
                      return <code {...props}>{children}</code>;
                    }
                  },
                }}
              >
                {text}
              </ReactMarkdown>
            )}
          />
        </div>

        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="tages">Tags</label>
          <select
            name="tags"
            id="tags"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            multiple
            onChange={(e) =>
              setTags(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            value={tags}
          >
            <option value="Node Js">Node Js</option>
            <option value="React Js">React Js</option>
            <option value="Next Js">Next Js</option>
            <option value="Css">CSS</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Flutter Dev">Flutter Dev</option>
            <option value="Database">Database</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={(ev) => setStatus(ev.target.value)}
            value={status}
          >
            <option value="">No select</option>
            <option value="React Js">Draft</option>
            <option value="publish">Publish</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 mt-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 addwebbtn"
        >
          Save Blog
        </button>
      </form>
    </>
  );
}
