export async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <article>
            <h1>Статья: {slug}</h1>
        </article>
    );
}