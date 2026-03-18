import { useState } from "react";
import { blogPosts } from "@/data/cacti";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold">บล็อก</h1>
        <p className="text-muted-foreground">ความรู้และเคล็ดลับเกี่ยวกับกระบองเพชร</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="cursor-pointer rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <p className="text-xs text-muted-foreground">{post.date}</p>
            <h2 className="mt-2 font-display text-xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">อ่านเพิ่มเติม →</span>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{selectedPost?.title}</DialogTitle>
          </DialogHeader>
          <p className="text-xs text-muted-foreground">{selectedPost?.date}</p>
          <p className="text-foreground/80 leading-relaxed">{selectedPost?.content}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;
