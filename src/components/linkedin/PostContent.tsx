import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

interface PostContentProps {
  hook: string;
  body: string;
  hashtags: string[];
}

export const PostContent: React.FC<PostContentProps> = ({ hook, body, hashtags }) => {
  const [copied, setCopied] = useState(false);

  const fullContent = `${hook}\n\n${body}\n\n${hashtags.join(' ')}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullContent);
      setCopied(true);
      toast.success('Post content copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy content');
    }
  };

  return (
    <div className="space-y-6">
      {/* Copy button */}
      <div className="flex justify-end">
        <Button variant="outline" onClick={handleCopy}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Full Post
            </>
          )}
        </Button>
      </div>

      {/* Hook section */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Hook</h3>
          <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
            {hook}
          </p>
        </CardContent>
      </Card>

      {/* Body section */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Body</h3>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="whitespace-pre-wrap leading-relaxed">{body}</p>
          </div>
        </CardContent>
      </Card>

      {/* Hashtags section */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Hashtags</h3>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostContent;
