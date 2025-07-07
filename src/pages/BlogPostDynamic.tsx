
import { useParams } from "react-router-dom";
import BlogPostPage from "@/components/BlogPostPage";

const BlogPostDynamic = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return <BlogPostPage slug={slug} />;
};

export default BlogPostDynamic;
