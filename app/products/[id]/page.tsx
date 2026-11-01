import { Suspense } from 'react';
import { ProductDetails } from './ProductDetails';

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
    ];
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <Suspense fallback={<div>Загрузка товара...</div>}>
            <ProductDetails id={id} />
        </Suspense>
    );
}