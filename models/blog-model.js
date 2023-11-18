import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
