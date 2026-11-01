import { Suspense } from 'react';
import { BlogPostContent } from './BlogPostContent';

export async function generateStaticParams() {
    return [
        { slug: 'nextjs-vvedenie' },
        { slug: 'react-osnovy' },
    ];
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <BlogPostContent params={params} />
        </Suspense>
    );
}