'use client';

import { useState } from 'react';
import { suggestBlogPostIdeas } from '@/ai/flows/suggest-blog-post-ideas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';

export default function BlogPostForm() {
    const [topic, setTopic] = useState('');
    const [ideas, setIdeas] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleSuggest = async () => {
        if (!topic.trim()) {
            setError('Please enter a topic.');
            return;
        }
        setLoading(true);
        setError(null);
        setIdeas([]);
        try {
            const result = await suggestBlogPostIdeas({ topic });
            setIdeas(result.ideas);
        } catch (e) {
            setError('Failed to generate ideas. Please try again.');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    
    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="title" className="text-lg">Blog Title</Label>
                    <Input id="title" placeholder="Your amazing blog post title" className="text-base py-6" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="content" className="text-lg">Content</Label>
                    <Textarea id="content" placeholder="Write your content here..." rows={15} className="text-base" />
                </div>
                 <Button size="lg">Publish Post</Button>
            </div>
            <div>
                <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                            <Sparkles className="text-accent w-6 h-6" />
                            AI Idea Generator
                        </CardTitle>
                        <CardDescription>
                            Enter a topic or keyword to get blog post ideas.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="topic">Topic</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="topic"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    placeholder="e.g., 'React Hooks'"
                                />
                                <Button onClick={handleSuggest} disabled={loading} variant="outline" size="icon">
                                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                                </Button>
                            </div>
                            {error && <p className="text-sm text-destructive">{error}</p>}
                        </div>
                        
                        {ideas.length > 0 && (
                             <div className="space-y-2 pt-4">
                                <h4 className="font-semibold">Suggestions:</h4>
                                <ul className="space-y-2">
                                    {ideas.map((idea, index) => (
                                        <li key={index} className="flex justify-between items-center bg-secondary p-2 rounded-md text-sm">
                                            <span>{idea}</span>
                                            <Button variant="ghost" size="icon" onClick={() => handleCopy(idea, index)}>
                                                {copiedIndex === index ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                       
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
