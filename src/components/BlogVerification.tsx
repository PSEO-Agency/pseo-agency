
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const BlogVerification = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-verification'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, is_published, created_at')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      console.log('Blog posts verification:', data);
      return data;
    },
  });

  if (isLoadng) return <div>Loading blog posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
      <h3 className="font-bold text-green-800 mb-2">Blog Posts Verification</h3>
      <p className="text-green-700 mb-2">Found {posts?.length || 0} blog posts:</p>
      <ul className="text-sm text-green-600">
        {posts?.map(post => (
          <li key={post.id} className="mb-1">
            <strong>{post.title}</strong> - {post.slug} (Published: {post.is_published ? 'Yes' : 'No'})
          </li>
        ))}
      </ul>
    </div>
  );
};
