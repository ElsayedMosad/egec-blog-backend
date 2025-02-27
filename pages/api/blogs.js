import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export default async function handle(req, res) {
  try {
    await mongooseConnect();
    const { method } = req;

    if (method === "POST") {
      const { title, slug, images, description, blogcategory, tags, status } =
        req.body;

      if (!title || !slug || !description || !blogcategory || !status) {
        return res.status(400).json({ error: "Required fields are missing" });
      }

      const blogDos = await Blog.create({
        title,
        slug,
        images,
        description,
        blogcategory,
        tags,
        status,
      });

      return res.status(201).json(blogDos);
    }

    if (method === "GET") {
      if (req.query?.id) {
        const blog = await Blog.findById(req.query.id);
        if (!blog) {
          return res.status(404).json({ error: "Blog not found" });
        }
        return res.json(blog);
      } else {
        return res.json((await Blog.find()).reverse());
      }
    }

    if (method === "PUT") {
      const {
        _id,
        title,
        slug,
        images,
        description,
        blogcategory,
        tags,
        status,
      } = req.body;

      if (!_id) {
        return res.status(400).json({ error: "Blog ID is required" });
      }

      const updatedBlog = await Blog.findByIdAndUpdate(
        _id,
        { title, slug, images, description, blogcategory, tags, status },
        { new: true }
      );

      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      return res.json(updatedBlog);
    }

    if (method === "DELETE") {
      if (!req.query?.id) {
        return res
          .status(400)
          .json({ error: "Blog ID is required for deletion" });
      }

      const deletedBlog = await Blog.findByIdAndDelete(req.query.id);
      if (!deletedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      return res.json({ success: true, message: "Blog deleted successfully" });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    console.error("API Error:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
