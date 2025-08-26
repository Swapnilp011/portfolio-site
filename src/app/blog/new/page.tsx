import BlogPostForm from "@/components/blog/blog-post-form";

export default function NewPostPage() {
    return (
        <div className="container max-w-4xl py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Create a New Post</h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Share your knowledge. Need inspiration? Use the AI tool to suggest ideas.
                </p>
            </div>
            <BlogPostForm />
        </div>
    );
}
