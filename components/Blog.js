import ReactMarkdown from "react-markdown";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Blog() {
  return (
    <>
      <form className="bg-gray-100 shadow-lg rounded-2xl p-6 ">
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
            className="text-gray-800 font-semibold w-full"
          >
            Upload Images:
          </label>
          <div className="relative w-full border-dashed border-2 border-gray-300 rounded-lg p-4 flex items-center justify-center bg-white cursor-pointer hover:border-indigo-500 transition">
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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Publish Article
        </button>
      </form>
    </>
  );
}
