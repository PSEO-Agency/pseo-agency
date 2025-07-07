
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

  if (isLoading) return <div>Loading blog posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-bold text-green-800 mb-2">✅ Blog Posts Verification Success!</h3>
        <p className="text-green-700 mb-2">Found {posts?.length || 0} blog posts in database:</p>
        {posts && posts.length > 0 && (
          <div className="space-y-2">
            {posts.map(post => (
              <div key={post.id} className="bg-white p-3 rounded border border-green-100">
                <div className="flex justify-between items-start">
                  <div>
                    <strong className="text-green-800">{post.title}</strong>
                    <div className="text-sm text-green-600">
                      Slug: <code className="bg-green-100 px-1 rounded">{post.slug}</code>
                    </div>
                    <div className="text-xs text-green-500">
                      Published: {post.is_published ? 'Yes' : 'No'} | 
                      Created: {new Date(post.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {posts && posts.length === 0 && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">❌ No Blog Posts Found</h3>
          <p className="text-red-700">The database appears to be empty. Please check the migration.</p>
        </div>
      )}
    </div>
  );
};
